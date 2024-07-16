package com.example.walletapp.walletapp.dto;

import lombok.Data;

@Data
public class TransferRequest {

    private String receiverUsername;
    private double amount;

}
