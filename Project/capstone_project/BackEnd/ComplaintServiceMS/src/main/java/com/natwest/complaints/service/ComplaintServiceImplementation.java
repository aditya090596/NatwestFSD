package com.natwest.complaints.service;

import com.natwest.complaints.entity.Complaint;
import com.natwest.complaints.exception.NoComplaintsFound;
import com.natwest.complaints.exception.ServerDown;
import com.natwest.complaints.repository.ComplaintRepositoryInterface;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class ComplaintServiceImplementation implements ComplaintServiceInterface{

    @Autowired
    private ComplaintRepositoryInterface compRepo;

    @Autowired
    private RestTemplate restTemplate;

    private Logger logger = LoggerFactory.getLogger(ComplaintServiceImplementation.class);

    @Override
    public List<Complaint> getAllComplaints(String custID) {

        List<Complaint> complaints=this.compRepo.raisedBy(custID);

            for (Complaint C : complaints){

                ArrayList comments = restTemplate.getForObject("http://localhost:8084/conversations/getbycomplaintid/"+C.getCompID(), ArrayList.class);
                C.setConversation(comments);
            }
            return complaints;
        }

    @Override
    public List<Complaint> allOpenComplaint(String status) {

        List <Complaint> openComplaints = this.compRepo.findByStatus(status);

            return openComplaints;
        }

    @Override
    public Complaint registercomplaint(Complaint compObj) throws ServerDown {

        Complaint raisedComplaint = this.compRepo.save(compObj);

        return raisedComplaint; // This should add to the store to be displayed on customer's dashboard.
    }

    @Override
    public Complaint addEmpComments(Complaint compObj, String id) {
        Complaint toBeUpdated = this.compRepo.addComments(id).get();
        Complaint UpdatedComplaint = null;

        return null;
    }
}