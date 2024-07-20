package com.wallet.wallet_app.service;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestAttribute;

@Service

public class AdminService {
    @Id
    @GeneratedValue
    private int adminId;
    public String askTransaction(@RequestAttribute Integer amount) {
        if(amount>0) System.out.println("Select Amount Of Transaction"+amount);
    }
    public Integer addamount(@RequestAttribute Integer amount) {
        if(amount>0)return amount++;
        else return 0;
    }
    public Integer amountTransfer(@RequestAttribute Integer amount){
        if(amount>0) return amount+=1;
    }
    public String loggedIn(@RequestAttribute String username, @RequestAttribute String password) {
        System.out.println("LoggedIn");
    }
    public String Logout(@RequestAttribute String username, @RequestAttribute String password) {
        System.out.println("LoggedOut!");
    }
    public String register(@RequestAttribute String username, @RequestAttribute String password){
        System.out.println("Register"+username+password);
    }

    public String viewAllTransactionByTransactionType(@RequestAttribute String amount){
        System.out.println("viewAllTransactionByTransactionType"+amount);
    }
//    public String loggedout(int customerId) {
//    }
}