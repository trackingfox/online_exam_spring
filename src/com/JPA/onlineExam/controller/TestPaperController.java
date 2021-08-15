package com.JPA.onlineExam.controller;

import java.io.FileNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.JPA.onlineExam.repository.TestPaperRepository;
import com.JPA.onlineExam.service.TestPaperService;

@RestController
@RequestMapping(value = "/testpapers", produces = { MediaType.APPLICATION_JSON_VALUE })
public class TestPaperController {
	@Autowired
	private TestPaperRepository repository;

	@Autowired
	private TestPaperService populateTestPaper;

	public TestPaperRepository getRepository() {
		return repository;
	}

	public void setRepository(TestPaperRepository repository) {
		this.repository = repository;
	}

	public TestPaperService getPopulateTestPaper() {
		return populateTestPaper;
	}

	public void setPopulateTestPaper(TestPaperService populateTestPaper) {
		this.populateTestPaper = populateTestPaper;
	}

	@GetMapping(value = "/populateTestPaper")
	public String populateCustomer() throws IllegalStateException, FileNotFoundException {

		// populateService.importCustomerFromCsv();
		populateTestPaper.populateTestPaper();

		return "populate testpaper done ";
	}

}