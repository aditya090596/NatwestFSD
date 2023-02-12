package com.natwest.Entity;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {

    private String name;
    private String email;
    private String token;
    private String usertype;
    private List<Complaints> complaints;
}