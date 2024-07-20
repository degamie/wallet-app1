package com.wallet.wallet_app.Entity;

import jakarta.persistence.*;

import java.math.BigDecimal;

public class walletEntity {
    private static final Object walletuser = ;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;
    private BigDecimal balance;
    @OneToOne(fetch=FetchType.LAZY;
    @JoinColumn(name="user_id",referencedColumnName="id")
            public WalletUser walletuser;
}
