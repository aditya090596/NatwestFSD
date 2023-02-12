package com.natwest.EmployeeAuthServerMS.Entity;

import lombok.*;
import org.bouncycastle.pqc.math.linearalgebra.PolynomialRingGF2;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {

    private String empID;
    private String empName;
    private String empEmail;
    private String token;
    private String usertype;
    private List<Complaints> complaintsList;

}