package com.wallet.wallet_app.Entity;

import com.wallet.wallet_app.model.Wallet;
import jakarta.persistence.*;

public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String Username;

    @OneToOne(mappedBy = "user",cascade= CascadeType.ALL,fetch=FetchType.LAZY)
    private Wallet wallet;



}
