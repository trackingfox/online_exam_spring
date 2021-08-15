package com.JPA.onlineExam.controller;

import java.io.FileNotFoundException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.JPA.onlineExam.model.Question;
import com.JPA.onlineExam.repository.QuestionRepository;
import com.JPA.onlineExam.service.PopulateQuestionService;

@RestController
@RequestMapping(value = "/questions", produces = { MediaType.APPLICATION_JSON_VALUE })
public class QuestionController {

	@Autowired
	private QuestionRepository repository;

	@Autowired
	private PopulateQuestionService populateQuestion;

	public PopulateQuestionService getPopulateQuestion() {
		return populateQuestion;
	}

	public void setPopulateQuestion(PopulateQuestionService populateQuestion) {
		this.populateQuestion = populateQuestion;
	}

	public QuestionRepository getRepository() {
		return repository;
	}

	public void setRepository(QuestionRepository repository) {
		this.repository = repository;
	}

	@GetMapping(value = "/allquestions")
	public List<Question> getAllCustomers() {

		return repository.findAll();
	}

	@GetMapping(value = "/ping")
	public String ping() {

		return "hello world hello cbb";
	}

	@GetMapping(value = "/populate")
	public String populateCustomer() throws IllegalStateException, FileNotFoundException {

		// populateService.importCustomerFromCsv();
		populateQuestion.populateQuestion();
		;

		return "populate done ok hello";
	}

}
