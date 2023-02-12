package com.natwest.EmployeeAuthServerMS.Entity;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Complaints {

    private String complaintID;
    private String complaintDesc;
    private String raisedBy;
    private String responses;

}