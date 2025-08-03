package com.reon.reply_pilot.controller;

import com.reon.reply_pilot.dtos.UserRequest;
import com.reon.reply_pilot.services.ResponseGeneratorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/response")
public class ResponseGeneratorController {
    private final Logger logger = LoggerFactory.getLogger(ResponseGeneratorController.class);
    private final ResponseGeneratorService responseGeneratorService;

    public ResponseGeneratorController(ResponseGeneratorService responseGeneratorService) {
        this.responseGeneratorService = responseGeneratorService;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateResponse(@RequestBody UserRequest userRequest) {
        logger.info("Controller:: Generating response");
        String response = responseGeneratorService.generateResponse(userRequest);
        logger.info("Controller:: Response generated");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
