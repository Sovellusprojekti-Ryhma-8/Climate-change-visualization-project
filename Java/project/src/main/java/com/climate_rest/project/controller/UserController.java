package com.climate_rest.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.climate_rest.project.services.UserService;
import com.climate_rest.project.data.User;

@RestController
public class UserController {
    
    @Autowired
    UserService uService;


    @PostMapping("register")
    public ResponseEntity<String> registeration(@RequestParam String userName,
     @RequestParam String passWord) {
        
        User user = uService.userRegisteration(userName, passWord);
        if (user!=null) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
     }
}
