package com.example.walletapp.walletapp.controller;
import com.example.walletapp.walletapp.dto.TransferRequest;
import com.example.walletapp.walletapp.model.User;
import com.example.walletapp.walletapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/transfer")
public class TransferController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public String transferFunds(@RequestBody TransferRequest transferRequest, Authentication authentication) {
        String senderUsername = authentication.getName();
        User sender = userRepository.findByUsername(senderUsername);
        User receiver = userRepository.findByUsername(transferRequest.getReceiverUsername());

        if (sender.getBalance() >= transferRequest.getAmount()) {
            sender.setBalance(sender.getBalance() - transferRequest.getAmount());
            receiver.setBalance(receiver.getBalance() + transferRequest.getAmount());
            userRepository.save(sender);
            userRepository.save(receiver);
            return "Transfer successful";
        } else {
            return "Insufficient balance";
        }
    }
}
