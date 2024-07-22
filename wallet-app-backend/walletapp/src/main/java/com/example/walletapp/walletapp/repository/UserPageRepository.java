package com.wallet.wallet_app.Repository;

import com.wallet.wallet_app.model.WalletAccount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserPageRepository extends JpaRepository<String,Long> {
    List<WalletAccount> PassCardInfo(Integer AccountId);
}
