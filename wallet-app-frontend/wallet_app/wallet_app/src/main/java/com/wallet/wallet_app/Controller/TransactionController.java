package com.wallet.wallet_app.Controller;

import com.wallet.wallet_app.CustomerNotException;
import com.wallet.wallet_app.Dao.TransactionDao;
import com.wallet.wallet_app.Respository.TransactionType;
import com.wallet.wallet_app.service.TransactionService;
import jakarta.transaction.Transaction;
import jakarta.websocket.server.PathParam;
import org.apache.coyote.Response;
import org.aspectj.apache.bcel.util.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.pulsar.PulsarProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public class TransactionController {
    @Autowired
    private TransactionService transactionService;
    @Autowired
    private TransactionDao dao;
    @GetMapping("/transaction_history/{unique_id}")
    public RepositoryEntity<List<Transaction>> viewAllTransactionHandler(@PathVariable("unique_id") String unique_id)         throws CustomerNotException,UserNotLoggedInException,TransactionNotFoundException{
        List<Transaction> allTransaction=transactionService.viewAllTransaction(unique_id);
        return new ResponseEntity<List<Transaction>>(allTransaction, HttpStatus.OK);

    }
    @GetMapping("/{from}/{to}/{id}")
    public ResponseEntity<List<Transaction>> viewTransactionByDateHandler(@PathVariable("from") String from,@PathVariable("to") String to,@PathVariable("id") String to,@PathVariable("id") String uniqueId )throws CustomerNotException,UserNotLoggedInException,TransactionNotFoundException{
        List<Transaction>historyByDate=transactionService.viewTransactionByDate(from,to,unique_id);
        return new ResponseEntity<List<Transaction>>(historyByDate, HttpStatus.OK);
    }
    @GetMapping("/historybyDate/{transactiontype}/{unique_id}")
    public ResponseEntity<List<Transaction>>viewAllTransactionByTypeHandler(@PathParam("transactiontype")TransactionType type,@PathVariable String unique_id)throws CustomerNotException,UserNotLogedInException,TransactionNotFoundException{
        List<Transaction>historyByDate=transactionService.viewTransactionByDate(from,to,unique_id);
        return new ResponseEntity<List<Transaction>>(historyByDate, HttpStatus.OK);
    }
    @GetMapping("/historyBytype/{transactiontype}/{unique_id}")
    public ResponseEntity<List<Transaction>>viewAllTransactionByTypeHandler(@PathParam ("transactiontype")(TransactionType transactiontype, @PathVariable String uniqueId)   throws CustomerNotException,UserNotLoggedInException,TransactionNotFoundException,@PathVariable String unique_id)throws CustomerNotException,UserNotLogedInException,TransactionNotFoundException{
        List<Transaction>TransactionType=transactionService.viewAllTransactionByTransactionType(unique_id);
        return new ResponseEntity<List<Transaction>>(TransactionType, HttpStatus.OK);
    }
}
