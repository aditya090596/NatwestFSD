package com.natwest.complaints.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Entity
@Table(name="complaint")
public class Complaint {

	
	@Id
	private UUID compID;
	private String description;
	private Date raisedAt;
	private String status;
	private String raisedBy;
	
	
	public Complaint(UUID compID, String description, Date raisedAt, String status, String raisedBy) {
		super();
		this.compID = compID;
		this.description = description;
		this.raisedAt = raisedAt;
		this.status = status;
		this.raisedBy = raisedBy;
	}

	public Complaint() {
		super();
	}

	public UUID getCompID() {
		return compID;
	}

	public void setCompID(UUID uuid) {
		this.compID = uuid;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getRaisedAt() {
		return raisedAt;
	}

	public void setRaisedAt(Date raisedAt) {
		this.raisedAt = raisedAt;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getRaisedBy() {
		return raisedBy;
	}

	public void setRaisedBy(String raisedBy) {
		this.raisedBy = raisedBy;
	}


	@Override
	public String toString() {
		return "Complaint [compID=" + compID + ", description=" + description + ", raisedAt=" + raisedAt + ", status="
				+ status + ", raisedBy=" + raisedBy + ", conversation=" + conversation + "]";
	}


	
	public List<Conversation> getConversation() {
		return conversation;
	}

	public void setConversation(List<Conversation> conversation) {
		this.conversation = conversation;
	}


	@Transient
	private List<Conversation> conversation = new ArrayList<>();

}