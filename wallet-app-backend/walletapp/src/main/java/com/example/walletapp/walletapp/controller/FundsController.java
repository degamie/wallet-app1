package com.example.walletapp.walletapp.controller;

import com.example.walletapp.walletapp.model.User;
import com.example.walletapp.walletapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/funds")
public class FundsController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public String addFunds(@RequestBody double amount, Authentication authentication) {
        String username = authentication.getName();
        User user = userRepository.findByUsername(username);
        user.setBalance(user.getBalance() + amount);
        userRepository.save(user);
        return "Funds added successfully";
    }
}
