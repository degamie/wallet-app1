package com.wallet.wallet_app.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.yaml.snakeyaml.tokens.ScalarToken;

import javax.security.auth.login.LoginException;

public class LogoutException extends Exception {
    try{
        LoginService.loginByUsername(@RequestAttribute  username,@RequestAttribute password);
        LoginService.logoutByUserName(@RequestAttribute  username,@RequestAttribute password);
    }
    catch(LogoutException e){
        e.printStackTrace();
    }
}
