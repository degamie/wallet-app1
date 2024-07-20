package com.wallet.wallet_app.Repository;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.antlr.v4.runtime.misc.NotNull;
import org.hibernate.annotations.processing.Pattern;

import javax.validation.constraints.Size;

import lombok.Data;

@Entity
@Data

public class LoginDao{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer userid;
    private String message;
    @NotNull
    @Size(min=10,max=10)
    @Pattern(String regexp="[6-9]{1}[0-9]{9}",message="Mobile Number must have 10 digits mobile Number")
    private String mobileNum;
    @NotNull
    @Pattern(regexp="[a-zA-Z0-9]{6-12}",message="Password must contain between 6-12 characters.Must be alphanumeric with both Upper and lowercase Characters.")
    private String Password;


    public void Login(Integer userid, String mobileNum, String password){
        super();
        this.userid = userid;
        this.mobileNum=mobileNum;
        this.Password = password;
    }
    public String getMobileNum(){return mobileNum;}

    public void setMobileNum(String mobileNum){this.mobileNum=mobileNum;}

    public Integer getUserid(){return userid;}

    public void setUserid(Integer userid){this.userid=userid;}

    public String getPassword(){return Password;}

    public void setPassword(String password){this.Password=password;}

    public Login(){
        super();
    }
    

}
