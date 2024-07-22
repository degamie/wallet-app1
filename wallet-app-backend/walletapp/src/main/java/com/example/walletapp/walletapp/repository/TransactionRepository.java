package com.wallet.wallet_app.Repository;

import com.wallet.wallet_app.model.WalletTransactions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface TransactionRepository extends JpaRepository<String,Long> {
    List<WalletTransactions> AmountAdded(Integer TransactionId, String Description, LocalDateTime dateofTransaction,Double Amount,Double AccountBalance);
    List<WalletTransactions>asktransaction(Integer amount);
}
