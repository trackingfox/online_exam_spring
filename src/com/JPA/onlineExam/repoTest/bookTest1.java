package com.JPA.onlineExam.repoTest;

import javax.transaction.Transactional;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class bookTest1 {
	@Transactional
	@Test
	public void bookcall() {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
//		BookService bookserv = (BookService) context.getBean("BookService");
//		bookserv.BookRun();
	}

}
