package com.climate_rest.project.services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PwEncoder extends BCryptPasswordEncoder {
}
