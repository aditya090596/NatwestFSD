package com.boot.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.boot.api.modal.Book;
import com.boot.api.services.BookService;

@RestController
public class BookController {
//	@RequestMapping(value="/books",method=RequestMethod.GET)
//	@ResponseBody
	
//	@GetMapping("/books")
// public Book getbooks() {
//	 Book books=new Book();
//	 books.setId(101);
//	 books.setTitle("Java book");
//	 books.setAuthor("Java by me");
//	return books;
//	 
// }
	// Now we crate dummy data and will fetch details from it.
	@Autowired
	private BookService bookservice;
//	private ResponseEntity<?> responseentity;
	// Taking reference/ inheritance has a // Aggregation
	
	@GetMapping("/books")
	public List<Book> getBooks () {
		return this.bookservice.getAllBooks();
		
	}
	
	@GetMapping("/books/{id}")
		public Book getBook(@PathVariable("id")int id) {
			return this.bookservice.getBookById(id);
		}
	@PostMapping("/books")
	 public Book savebook(@RequestBody Book book) {
	Book b= this.bookservice.addNewBook(book);
//	return book; // posting the data. SO returning book details and posting to database
	 return b;
	}
	
	@DeleteMapping("/books/{id}")
	public Book deletebook(@PathVariable("id")int id)
	{
		Book b= this.bookservice.deleteHandler(id);
		 return b;
		
	}
	@PutMapping("/books/{id}")
	public Book updatebook(@RequestBody Book book,@PathVariable("id")int Id) {
		Book b= this.bookservice.updateHandler(book, Id);
		return b;
	}
	
}
