package com.JPA.onlineExam.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.JPA.onlineExam.repository.TopicRepository;
import com.JPA.onlineExam.service.TopicService;

@RestController
@RequestMapping(value = "/topics", produces = { MediaType.APPLICATION_JSON_VALUE })
public class TopicController {

	@Autowired
	private TopicRepository repository;

	@Autowired
	private TopicService populateTopics;

	public TopicRepository getRepository() {
		return repository;
	}

	public void setRepository(TopicRepository repository) {
		this.repository = repository;
	}

	public TopicService getPopulateTopics() {
		return populateTopics;
	}

	public void setPopulateTopics(TopicService populateTopics) {
		this.populateTopics = populateTopics;
	}

}
