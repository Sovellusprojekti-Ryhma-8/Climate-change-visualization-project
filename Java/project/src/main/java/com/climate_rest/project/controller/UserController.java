package com.climate_rest.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.climate_rest.project.services.UserService;
import com.climate_rest.project.data.User;

@CrossOrigin
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

     @PostMapping("login")
     public ResponseEntity<String> login(
        @RequestParam String userName,
        @RequestParam String passWord) {
            String token = uService.login(userName, passWord);
            if(token==null){
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            return new ResponseEntity<>(token, HttpStatus.OK);
        }

    @GetMapping("private")
    public ResponseEntity<String> getPrivateData(@RequestHeader("Authorization") String bearer){
        if(bearer.startsWith("Bearer")){
            String token = bearer.split(" ")[1];
            String userName = uService.validateJwt(token);
            if(userName!=null){
                return new ResponseEntity<>(userName, HttpStatus.OK);
            }
        }
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
   }

   @PostMapping("deleteUser")
    public ResponseEntity<String> deleteUser (@RequestParam String userName) {
        User user = uService.deleteById(userName);
        if (user != null){
            return new ResponseEntity<>(HttpStatus.OK);
        }
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }
}


