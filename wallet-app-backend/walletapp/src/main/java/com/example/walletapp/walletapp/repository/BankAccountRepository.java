package com.wallet.wallet_app.Repository;

import com.wallet.wallet_app.model.BankAccount;
import com.wallet.wallet_app.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount,Integer> {
    List<Customer> Register(String customerName);
    List<Customer> Login(String customerName,int customerId);
    List<Customer> AddAmount(int amount);
    List<Customer> TransferAmount(int amount);
    List<Customer> AskTransaction(int amount);
}
