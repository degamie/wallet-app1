package com.example.wallet.walletapp.repository;

import com.example.wallet.walletapp.model.Wallet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WalletRepository extends JpaRepository<Wallet, Long> {
}
