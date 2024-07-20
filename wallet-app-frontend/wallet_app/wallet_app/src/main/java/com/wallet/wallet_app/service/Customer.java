package com.wallet.wallet_app.service;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wallet.wallet_app.model.Wallet;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;
import org.hibernate.annotations.processing.Pattern;

import javax.validation.constraints.Size;
public class Customer {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer userid;

    @NotNull
    @Size(min=10,max=10)
    @Pattern(regexp="[6-9]{1}[0-9]{9}",message="Mobile Number must have 10 digits mobile Number")
    private String mobileNum;

    @Email
    @NotNull
    private String email;

    @JsonIgnore
    @OneToOne(optional=false,cascade= CascadeType.ALL)
    private Wallet wallet;

    String password;
    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        Integer userId;
        this.userid=userId;
    }

    public Integer getUserName(String userName) {
        return userName;
    }

    public void setUserName(String userName) {
        this.userid=userName;
    }

    public String getPassword() {

        return password;
    }

    public Integer setMobileNum(String mobileNum) {
        return userid;
    }
    public String getPassword(String password) {
        this.password=password;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email=email;
    }
    public Wallet getWallet() {
        return wallet;
    }
    public void setWallet(Wallet wallet) {
        this.wallet=wallet;
    }

    public Customer(Integer userid, String mobileNum, String email, Wallet wallet){
        super();
        this.userid=userid;
        this.mobileNum=mobileNum;
        this.email=email;
        this.wallet=wallet;
    }
    public Customer(Integer userid, String mobileNum, String email){
        super();
    }
}