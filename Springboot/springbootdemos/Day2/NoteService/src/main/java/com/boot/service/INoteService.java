package com.boot.service;

import java.util.List;

import com.boot.model.Note;

public interface INoteService 
{
  public Note saveNote(Note noteObj);

  public Note updateNote(Note noteObj,String nid);

  public List<Note> getAllNotes();

  public Note getNoteById(String nid);

  public boolean deleteNote(String nid);

}