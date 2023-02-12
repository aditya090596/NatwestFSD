package com.natwest.ConversationMS.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="conversation")
public class Conversation {

    @Id
    private String conversationID;
    private Date commentedAt;
    private String commentBy;
    private String comment;
    private String complaint_id;

}