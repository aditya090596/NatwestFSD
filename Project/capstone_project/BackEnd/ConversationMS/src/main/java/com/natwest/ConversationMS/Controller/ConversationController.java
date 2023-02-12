package com.natwest.ConversationMS.Controller;

import com.natwest.ConversationMS.Entity.Conversation;
import com.natwest.ConversationMS.Exceptions.NoCommentsFoundException;
import com.natwest.ConversationMS.Services.ConversationServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conversations")
public class ConversationController {

    @Autowired
    private ConversationServiceInterface conversationService;

    @GetMapping("/getbycomplaintid/{compId}")
    public ResponseEntity<?> getByCompID(@PathVariable String compId) {

        List<Conversation> commentList = this.conversationService.getbycompID(compId);

        return ResponseEntity.ok(commentList);
    }

    @PostMapping("/addempresponse")
    public ResponseEntity<?> updateEmpComment(@RequestBody Conversation conversationObj){

        List<Conversation> updatedConvo = this.conversationService.updateEmpResponse(conversationObj);

        return ResponseEntity.ok(updatedConvo);
    }
}