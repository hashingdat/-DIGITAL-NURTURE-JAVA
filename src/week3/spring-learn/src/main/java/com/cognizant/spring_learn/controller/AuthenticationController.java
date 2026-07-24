////package com.cognizant.spring_learn.controller;
////
////public class AuthenticationController {
////}
//
//package com.cognizant.spring_learn.controller;
//
//import com.cognizant.spring_learn.model.JwtResponse;
//import com.cognizant.spring_learn.util.JwtUtil;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.Authentication;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class AuthenticationController {
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    @GetMapping("/authenticate")
//    public JwtResponse authenticate(Authentication authentication) {
//
//        String token = jwtUtil.generateToken(authentication.getName());
//
//        return new JwtResponse(token);
//    }
//}

package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.model.JwtResponse;
import com.cognizant.spring_learn.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public JwtResponse authenticate(Authentication authentication) {

        String token = jwtUtil.generateToken(authentication.getName());

        return new JwtResponse(token);
    }
}