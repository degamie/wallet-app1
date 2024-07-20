package com.wallet.wallet_app.service;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;
import org.springframework.web.bind.annotation.RequestAttribute;


public class MessageSent {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public String messageSent(@RequestAttribute String message){
        return "Message Sent"+message;
    }
}
