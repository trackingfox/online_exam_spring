package com.JPA.onlineExam.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JPA.onlineExam.repository.TopicRepository;

@Service
public class TopicService {

	@Autowired
	private TopicRepository repository;

	public TopicRepository getRepository() {
		return repository;
	}

	public void setRepository(TopicRepository repository) {
		this.repository = repository;
	}

}
