package com.wallet.wallet_app.Respository;

import com.wallet.wallet_app.model.BankAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankAccountDao extends JpaRepository<BankAccount,Integer> {
    public BankAccount findWalletId(Integer walletId);
}
