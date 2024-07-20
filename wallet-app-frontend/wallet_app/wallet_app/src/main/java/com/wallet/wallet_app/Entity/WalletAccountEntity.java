package com.wallet.wallet_app.Entity;

import com.wallet.wallet_app.model.WalletUser;
import jakarta.persistence.*;
import org.apache.catalina.User;

import java.math.BigDecimal;
@Entity
public class WalletAccountEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal balance;
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="user_id",referencedColumnName = "id")
    private WalletUser walletUser;
}
