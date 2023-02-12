package com.natwest.ConversationMS.Repository;

import com.natwest.ConversationMS.Entity.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConversationRepoInterface extends JpaRepository<Conversation, String> {

    @Query(value="select * from conversation u where u.complaint_id like :Param", nativeQuery=true)
    public List<Conversation> findByComplaintId(@Param("Param") String compID);
}