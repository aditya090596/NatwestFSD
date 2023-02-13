package com.natwest.ConversationMS.Services;

import com.natwest.ConversationMS.Entity.Conversation;
import com.natwest.ConversationMS.Exceptions.NoCommentsFoundException;
import com.natwest.ConversationMS.Repository.ConversationRepoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.convert.Jsr310Converters;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

@Service
public class ConversationServiceImplementation implements ConversationServiceInterface{

    @Autowired
    private ConversationRepoInterface conversationRepo;

    @Override
    public List<Conversation> getbycompID(String compID) {

        List<Conversation> commentList = this.conversationRepo.findByComplaintId(compID);

        return commentList;
    }

    @Override
    public List<Conversation> updateEmpResponse(Conversation conversationObj) {

        conversationObj.setCommentBy("Adviser");
        conversationObj.setCommentedAt(new Date(System.currentTimeMillis()));
        this.conversationRepo.save(conversationObj);
        List<Conversation> updatedConvo = this.conversationRepo.findByComplaintId(conversationObj.getComplaint_id());

        return updatedConvo;
    }
}