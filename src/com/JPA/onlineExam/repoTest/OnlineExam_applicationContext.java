package com.JPA.onlineExam.repoTest;

import java.io.FileNotFoundException;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.JPA.onlineExam.repository.QuestionRepository;
import com.JPA.onlineExam.service.QuestionService;
import com.JPA.onlineExam.service.TestPaperService;
import com.JPA.onlineExam.service.TopicService;

public class OnlineExam_applicationContext {

	@Autowired
	TestPaperService testserve;

	@Autowired
	QuestionService questionService;

	// @Transactional
	@Test
	public void TestPapercall() throws IllegalStateException, FileNotFoundException {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

		QuestionService questionService = context.getBean(QuestionService.class);
		questionService.populateQuestion();
		QuestionRepository questionrepo = context.getBean(QuestionRepository.class);
		System.out.println(questionrepo.fetchQuestions());

		TopicService topicservice = context.getBean(TopicService.class);
		topicservice.populateTopics();

		TestPaperService testpaperservice = context.getBean(TestPaperService.class);
		testpaperservice.populateTestPaper();

	}

}
