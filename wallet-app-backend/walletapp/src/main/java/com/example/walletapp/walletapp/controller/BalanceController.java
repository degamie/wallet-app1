package com.example.walletapp.walletapp.controller;

import com.example.walletapp.walletapp.model.User;
import com.example.walletapp.walletapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/balance")
public class BalanceController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public double getBalance() {
        // Retrieve the currently authenticated user's username
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        // Find the user by username
        User user = userRepository.findByUsername(username);

        if (user != null) {
            return user.getBalance();
        } else {
            throw new RuntimeException("User not found: " + username);
        }
    }
}
