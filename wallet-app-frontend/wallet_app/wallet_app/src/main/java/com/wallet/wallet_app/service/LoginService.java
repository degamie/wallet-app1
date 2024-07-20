package com.wallet.wallet_app.service;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;

import javax.security.auth.login.LoginException;

@Service
public abstract class LoginService {
    @Id
    @GeneratedValue
    public static void  loginByUsername(@RequestAttribute String username) throws LoginException {
        if(username != null)System.out.println("UserName: " + username);
    }
    public static void  logoutByUserName(@RequestAttribute String username, @RequestBody AdminService adminService,@RequestAttribute String password) throws LoginException {
       System.out.println(adminService.Logout(username,password));
    }
//        return loginByUsername(username);

//    public abstract String logInAccount(Login loginData) throws LoginException;
//
//    public String logoutFromAccount(String key) throws LogoutException {
//        return null;
//    }

}
