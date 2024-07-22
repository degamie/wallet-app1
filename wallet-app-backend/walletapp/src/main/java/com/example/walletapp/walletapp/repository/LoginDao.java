package com.wallet.wallet_app.Repository;

import com.wallet.wallet_app.service.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoginDao  extends JpaRepository<Login,Integer> {
    List<Login> loginByUsername(String username);
    List<Login> loginByEmail(String email);
    List<Login> loginByPassword(String password);
    List<Login> loginByEmailAndPassword(String email, String password);
    List<Login> loginByUsernameAndPassword(String username, String password);
}
