package com.poly.rest.controller;

import java.util.List;
import java.util.Optional;

import com.poly.bean.Account;
import com.poly.service.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/rest/accounts")
public class AccountRestController {
    @Autowired
    AccountService aService;
    
    @GetMapping("/{id}")
    public Account getByUsername(@PathVariable("id") String username){
        return aService.findByUsername(username);
    }

    @GetMapping
    public List<Account> getAccounts(@RequestParam("admin") Optional<Boolean> admin){
        if(admin.orElse(false)){
            return aService.getAdministrators();
        }
        return aService.getAll();
    }
    @PostMapping()
    public Account createAccounts(@RequestBody Account account){

            return aService.create(account);
    }

    @PutMapping("/{username}")
    public Account updateAccounts(@RequestBody Account account){
            return aService.update(account);
    }
    
    @DeleteMapping("/{username}")
    public void deleteAccounts(@PathVariable("username") String username){
        aService.delete(username);
    }

}
