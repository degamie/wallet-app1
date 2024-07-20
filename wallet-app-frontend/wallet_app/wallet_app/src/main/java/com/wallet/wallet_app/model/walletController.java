package com.wallet.wallet_app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import com.wallet.wallet_app.Repository.TransactionRepository;
import org.springframework.stereotype.Controller;

@Controller
public class walletController {
    @Autowired
    private TransactionRepository transactionRepository;

}
