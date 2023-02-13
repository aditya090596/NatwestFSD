package com.natwest.ConversationMS.Services;

import com.natwest.ConversationMS.Entity.Conversation;
import com.natwest.ConversationMS.Exceptions.NoCommentsFoundException;

import java.util.List;

public interface ConversationServiceInterface {

    public List<Conversation> getbycompID(String compID) ;

    public List<Conversation> updateEmpResponse(Conversation conversationObj);
}