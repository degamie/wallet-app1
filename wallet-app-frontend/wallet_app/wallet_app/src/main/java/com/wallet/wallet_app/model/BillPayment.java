package com.wallet.wallet_app.model;

import com.wallet.wallet_app.Respository.TransactionType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.math.BigDecimal;
import java.time.LocalDate;

public class BillPayment {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer billId;
    private BillType biltType;
    private TransactionType biltTransactionType;
    @DecimalMin(value="0.1",inclusive=true)
    private BigDecimal biltAmount;
    private LocalDate time;
    private Integer walletId;

    private void setBillId(Integer billId) {
        this.billId = billId;
    }
    public BillType getBillType(){
        return biltType;
    }
}
