package com.climate_rest.project.services;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.climate_rest.project.data.User;
import com.climate_rest.project.repo.usersRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@Service
public class UserService {

    @Autowired
    PwEncoder encoder;

    @Autowired
    usersRepo uRepo;

    @Autowired
    DataService dataService;

    @Value("${jwt.secret}")
    private String jwtKey;


    List<User> users = new ArrayList<>();
    
    public User userRegisteration(String userName, String passWord) {
        User user = new User(userName, encoder.encode(passWord));         
            if (sameUsername(userName)) {
                return null;
            } else {
                System.out.println(userName+" "+encoder.encode(passWord));
                users.add(user);
                uRepo.save(user);
                return user;        
            }
    }

    public boolean sameUsername(String userName) {
        User user =  uRepo.findById(userName).orElse(null);
        if (user != null) {
            return true;
        } else {
            return false;
        }
    }

    public User deleteById(String userName) {
        User user =  uRepo.findById(userName).orElse(null);
        

        if (user != null) {
            uRepo.delete(user);
            dataService.deleteUsersViews(userName);
            return user;
        }
        return null;
    }


    public String login(String userName, String passWord){
        
        User user =  uRepo.findById(userName).orElse(null);
        if(user==null || !encoder.matches(passWord, user.getPassWord())){
            return null;
        }

        Algorithm alg = Algorithm.HMAC256(jwtKey);
        return JWT.create().withSubject(user.getUserName()).sign(alg);
    }

     public String validateJwt(String jwtToken){
        Algorithm alg = Algorithm.HMAC256(jwtKey);
        JWTVerifier verifier = JWT.require(alg).build();

        try{
            DecodedJWT jwt = verifier.verify(jwtToken);
            return jwt.getSubject();
        } catch (JWTVerificationException e) {
            
        }
        return null;
    }
 
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH",
                "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("authorization", "content-type",
                "x-auth-token"));
        configuration.setExposedHeaders(Arrays.asList("x-auth-token"));
        UrlBasedCorsConfigurationSource source = new
                UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
    
}
