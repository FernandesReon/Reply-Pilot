package com.reon.reply_pilot.services;

import com.reon.reply_pilot.dtos.UserRequest;

public interface ResponseGeneratorService {
    String generateResponse(UserRequest userRequest);
}
