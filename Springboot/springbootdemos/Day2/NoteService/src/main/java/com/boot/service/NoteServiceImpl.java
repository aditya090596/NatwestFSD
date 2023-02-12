package com.boot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.model.Note;
import com.boot.repository.INoteRepository;

@Service
public class NoteServiceImpl implements INoteService 
{
	@Autowired
	private INoteRepository noterepository;

	@Override
	public Note saveNote(Note noteObj) 
	{
		Optional<Note> noteOptional = this.noterepository.findById(noteObj.getNoteId());

        if(noteOptional.isPresent())
        {
            System.out.println("Record Already exists !!!");
        }

        Note nObj = this.noterepository.save(noteObj);

        return nObj;
	}

	@Override
	public Note updateNote(Note noteObj, String nid) {
		
    	Optional<Note> noteOptional = this.noterepository.findById(nid);

    	Note nObj = null;
    	Note updatedData = null;
    	
        if(noteOptional.isPresent())
        {
        	System.out.println("Record Exists and ready for Update !!!");
        	
        	nObj = noteOptional.get();
 
           	nObj.setNoteTitle(noteObj.getNoteTitle());
        	nObj.setNoteDesc(noteObj.getNoteDesc());
        	
        	updatedData = this.noterepository.save(nObj);
        	
        }
        return updatedData;		
	}

	@Override
	public List<Note> getAllNotes() {
		return this.noterepository.findAll();
	}

	@Override
	public Note getNoteById(String nid) {
		 Optional<Note> noteOptional = this.noterepository.findById(nid);

	        Note nObj=null;
	        
	        if(noteOptional.isPresent())
	        {
	        	nObj = noteOptional.get();
	        }

	        return nObj;
	}

	@Override
	public boolean deleteNote(String nid) {
		Optional<Note> noteOptional = this.noterepository.findById(nid);

        boolean deleteStatus = false;
        
        if(noteOptional.isPresent())
        {
     	   this.noterepository.delete(noteOptional.get());
        		deleteStatus = true;
        }

        return deleteStatus;
	}
}