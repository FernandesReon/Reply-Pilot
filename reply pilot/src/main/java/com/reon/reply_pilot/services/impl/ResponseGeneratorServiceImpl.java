package com.reon.reply_pilot.services.impl;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.reon.reply_pilot.dtos.UserRequest;
import com.reon.reply_pilot.services.ResponseGeneratorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class ResponseGeneratorServiceImpl implements ResponseGeneratorService {
    private final Logger logger = LoggerFactory.getLogger(ResponseGeneratorServiceImpl.class);
    private final WebClient webClient;

    @Value("${gemini.api.url}")
    private String geminiApiUrl;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public ResponseGeneratorServiceImpl(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }


    @Override
    public String generateResponse(UserRequest userRequest) {
        logger.info("Service:: Building Prompt Response for UserRequest {}", userRequest);
        // Build prompt
        String prompt = buildPrompt(userRequest);

        // Craft a request
        logger.info("Service:: Crafting a request");
        Map<String, Object> requestData = Map.of(
                "contents", new Object[] {
                        Map.of("parts", new Object[] {
                                Map.of("text", prompt)
                        })
                }
        );

        // Send request and fetch the response
        logger.info("Service:: Sending a request");
        String response = webClient.post()
                .uri(geminiApiUrl + geminiApiKey)
                .header("Content-Type", "application/json")
                .bodyValue(requestData)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        // Extract response and return it.
        logger.info("Service:: Got a response from Gemini API");
        return extractResponseContent(response);
    }

    private String buildPrompt(UserRequest userRequest) {
        StringBuilder prompt = new StringBuilder();
        prompt.append("Generate a professional tone response for the following content. " +
                "Please don't generate subject line ");
        if (userRequest.getTone() != null && !userRequest.getTone().isEmpty()) {
            prompt.append("Use a ").append(userRequest.getTone()).append(" tone for the following content. ");
        }
        prompt.append("\nOriginal email: \n").append(userRequest.getRequestContent());
        return prompt.toString();
    }

    private String extractResponseContent(String response) {
        logger.info("Service:: Extracting response content from response");
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(response);
            return rootNode.get("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .get("text")
                    .asText();
        } catch (Exception e) {
            return "Error processing request: " + e.getMessage();
        }
    }
}
