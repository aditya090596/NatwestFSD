package com.natwest.ConversationMS.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;


@Entity
@Table(name="conversation")
public class Conversation {

    @Id
    private String conversationID;
    private Date commentedAt;
    private String commentBy;
    private String comment;
    private String complaint_id;
    
    
	public Conversation() {
		super();
	}
	public Conversation(String conversationID, Date commentedAt, String commentBy, String comment,
			String complaint_id) {
		super();
		this.conversationID = conversationID;
		this.commentedAt = commentedAt;
		this.commentBy = commentBy;
		this.comment = comment;
		this.complaint_id = complaint_id;
	}
	public String getConversationID() {
		return conversationID;
	}
	public void setConversationID(String conversationID) {
		this.conversationID = conversationID;
	}
	public Date getCommentedAt() {
		return commentedAt;
	}
	public void setCommentedAt(Date commentedAt) {
		this.commentedAt = commentedAt;
	}
	public String getCommentBy() {
		return commentBy;
	}
	public void setCommentBy(String commentBy) {
		this.commentBy = commentBy;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getComplaint_id() {
		return complaint_id;
	}
	public void setComplaint_id(String complaint_id) {
		this.complaint_id = complaint_id;
	}
	@Override
	public String toString() {
		return "Conversation [conversationID=" + conversationID + ", commentedAt=" + commentedAt + ", commentBy="
				+ commentBy + ", comment=" + comment + ", complaint_id=" + complaint_id + "]";
	}
    
    

}