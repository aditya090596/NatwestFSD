package com.natwest.complaints.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="complaint")
public class Complaint {

	@Id
	private String compID;
	private String description;
	private Date raisedAt;
	private String status;
	private String raisedBy;

	@Transient
	private List<Conversation> conversation = new ArrayList<>();

}