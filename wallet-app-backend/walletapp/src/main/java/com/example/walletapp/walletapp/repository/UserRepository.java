package com.example.walletapp.walletapp.repository;

import com.example.walletapp.walletapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
