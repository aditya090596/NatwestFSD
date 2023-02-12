package com.natwest.EmployeeAuthServerMS.Entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="employee")
public class Employee {

	@Id
	@Column(name="empID")
	private String empID;

	@Column(name="fullname")
	private String fullname;

	@Column(name="email")
	private String email;

	@Column(name="role")
	private String role;

	@Column(name="phonenumber")
	private String phonenumber;

	@Column(name="password")
	private String password;

}