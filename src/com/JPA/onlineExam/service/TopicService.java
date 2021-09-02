package com.JPA.onlineExam.service;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JPA.onlineExam.model.Topic;
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

	public List<Topic> generateTopics() {

		List<Topic> topicList = new ArrayList<>();
		Topic topic1 = new Topic();
		Topic topic2 = new Topic();
		Topic topic3 = new Topic();
//		Topics topic4 = new Topics();
//		Topics topic5 = new Topics();
//		Topics topic6 = new Topics();

		// topic1.setTestPapers(testPapers);
		topic1.setContent("Hello content");
		topic1.setTitletopic("JAVA");

		// testPapers = FetchTestpaper(em);

		// topic2.setTestPapers(testPapers);
		topic2.setContent("Pqljjv");
		topic2.setTitletopic("ANGULAR");

		// testPapers = FetchTestpaper(em);

		// topic3.setTestPapers(testPapers);
		topic3.setContent("gdgdgdlk");
		topic3.setTitletopic("PYTHON");

		topicList.add(topic1);
		topicList.add(topic2);
		topicList.add(topic3);

		return topicList;

	}

	public void populateTopics() throws IllegalStateException, FileNotFoundException {
		List<Topic> topicList = generateTopics();

		topicList.forEach(x -> repository.save(x));
	}

	public Set<Topic> fetchTopics() {

		Set<Topic> topics = repository.FetchTopics();
		return topics;

	}

}
