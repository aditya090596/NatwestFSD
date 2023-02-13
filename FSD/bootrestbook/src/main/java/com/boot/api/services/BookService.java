package com.boot.api.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Component;

import com.boot.api.modal.Book;
@Component
public class BookService {

// creating a list where we add books list and will fetch details from it through postman
	private  static List <Book> list=new ArrayList<>();
	static {list.add(new Book(11,"Java programmer","XYZ"));
	 list.add(new Book(12,"Python programmer","PQR"));
	 list.add(new Book(13,"Kotlin programmer","LMN"));}
	
	  public List<Book> getAllBooks(){
		  return list;
		  

	  }
	  public Book getBookById(int id){
//		Book book =null;
//		Book book= list.stream().filter(e->e.getId()==id).findFirst().get();
//		  return book;

		  
		  for (Book book: list)
		  {if(id == book.getId()) {
			  return book;
		  }}
	  
	  throw new NoSuchElementException();
		
		  
		  
}
	  
	 // Adding the book
//	  public void  addNewBook(Book book1) {
//	 list.add (book1);
//	  }
	  public Book  addNewBook(Book book1) {
	 list.add (book1);
	 return book1;
	  }  
		 
	  public Book deleteHandler(int id) {
		  for (Book book:list) {
			  if(id== book.getId()) {
				  list.remove(book);
				 return book; 
			  }
				
		  }
		  return null; 
	  }
	  public Book updateHandler(Book book1 ,int id) {
		 try {for (Book book:list) {
			  if(id== book.getId()) {
				 book.setId(id);
				 book.setAuthor(book1.getAuthor());
				 book.setTitle(book1.getTitle());
				 return book; 
			  }
		  }
		 }catch(Exception e) 
		 {e.getMessage();
		 }
		  return null;
	 
	  
}
}