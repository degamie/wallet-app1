package com.wallet.wallet_app.Controller;

import com.wallet.wallet_app.model.Customer;
import com.wallet.wallet_app.model.WalletUser;
import com.wallet.wallet_app.service.AdminService;
import jakarta.transaction.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.pulsar.PulsarProperties;
import org.springframework.web.bind.annotation.*;

public class AdminController {


    private final AdminService adminService;

    @Autowired
    public AdminController(@RequestBody AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/Admin/Reqister")
    public Customer Register(@RequestBody Customer customer,@RequestAttribute String NameLogin,@RequestAttribute String username,@RequestAttribute String password) {
        return adminService.register(username, password);
    }

    @PostMapping("/Admin/Login{id}")
    public String Login(@PathVariable String username,@PathVariable String password) {
        return adminService.loggedIn(username,password);
    }
    @DeleteMapping("/Admin/Logout{id}")
    public String Logout(@PathVariable String username,@PathVariable String password) {
        return adminService.Logout(username,password);
    }

    @PostMapping("/WalletUser/AddAmount{amount}")
    public WalletUser AddAmount(@PathVariable Integer amount) {
        return adminService.addamount(amount);
    }

    @PostMapping("/WalletTransactions/AddAmount{amount}")
    public boolean TransferAmount(@PathVariable Integer amount) {
        return adminService.amountTransfer(amount);
    }

    @PostMapping("/WalletUser/AskTransaction{id}")
    public WalletUser AskTransaction(@RequestBody Transaction transaction,@RequestAttribute Integer amount) {
        return adminService.askTransaction(amount);
    }