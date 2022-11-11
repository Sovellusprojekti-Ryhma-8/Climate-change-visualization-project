package com.climate_rest.project.services;

import java.util.List;
import java.util.ArrayList;

import com.climate_rest.project.data.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    PwEncoder encoder;

    List<User> users = new ArrayList<>();
    
    public User userRegisteration(String userName, String passWord) {
        User user = new User(userName, encoder.encode(passWord)); 
        users.add(user); // tähän database lisäys
        System.out.println(userName+" "+encoder.encode(passWord));
        return user;
    }
}
