package com.natwest.complaints.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Conversation {

    private String conversationID;
    private Date commentedAt;
    private String commentBy;
    private String comment;
    private String complaint_id;

}