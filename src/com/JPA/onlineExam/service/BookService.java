package com.JPA.onlineExam.service;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JPA.onlineExam.model.Book;
import com.JPA.onlineExam.repository.BookRepository;

@Service("BookService")
public class BookService {

	@Autowired
	private BookRepository bookrepo;

	@Test
	public void BookRun() {

		Book b = new Book("The Maificent");
		Book c = new Book("The Sun");
		Book d = new Book("The rainbow");

		bookrepo.save(d);

//		bookImpl.saveBook(b);
//		bookImpl.saveBook(c);
//		bookImpl.saveBook(d);
//
//		System.out.println(bookImpl.getBookById(3).toString());

		// System.out.println(bookImpl.getBookByTitle("The Sun").toString());

		// bookImpl.deleteBook(b);

	}

}
