package com.wallet.wallet_app.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.antlr.v4.runtime.misc.NotNull;
import org.hibernate.annotations.BatchSize;

@Entity
public class BeneficiaryDetail {
    private final Object walletId;
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer beneficiaryId;

    @NotBlank
    @NotNull
    @Size(min=4,max=25,message="Name length minimum 4 to 25" )
    private String beneficiaryName;

    @NotBlank
    @NotNull
    @Size(min=4,max=10,message="Mobile number must be in 10 digits!")
    private String beneficiaryMobileNum;

    private BeneficiaryDetail() {
        @NotBlank
        @NotNull
        @Size(min=4,max=25,message="Name length minimum 4 to 25")
        private String beneficiaryName;
        @NotBlank
        @NotNull @Size(min=4,max=10,message="Mobile NUmber length must be 10")
        private String beneficiaryMobileNum,Integer;
        Object walletId;
        walletId){
            @NotBlank
            @NotNull @Size(min=4,max=10,message="Mobile NUmber length must be 10")
            private String beneficiaryMobileNum,Integer;

            super();
            this.beneficiaryName=beneficiaryName;
            this.beneficiaryMobileNum=beneficiaryMobileNum;
            this.walletId=walletId;
        }
        public String getBeneficiaryName(){
                return beneficiaryName;
        }
        public void setBeneficiaryName(String beneficiaryName){
                this.beneficiaryName=beneficiaryName;
        }
        public String getBeneficiaryMobileNum(String beneficaryMobileNum){
                return beneficaryMobileNum;
        }
        public void setBeneficiaryMobileNum(String beneficiaryMobileNum){
                this.beneficiaryMobileNum=beneficiaryMobileNum;
        }
        public Integer getWalletId(){
                return walletId;
        }
        public void setWalletId(Integer walletId){
                this.walletId=walletId;
        }

    }
}
