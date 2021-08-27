package com.JPA.onlineExam.repoTest;

import java.io.FileNotFoundException;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.JPA.onlineExam.repository.QuestionRepository;
import com.JPA.onlineExam.repository.TopicRepository;
import com.JPA.onlineExam.service.AttemptedTestService;
import com.JPA.onlineExam.service.QuestionService;
import com.JPA.onlineExam.service.ScoreService;
import com.JPA.onlineExam.service.TestPaperService;
import com.JPA.onlineExam.service.TopicService;
import com.JPA.onlineExam.service.TopicWiseScoreService;

public class OnlineExam_applicationContext {

	@Autowired
	TestPaperService testpaperservice;

	@Autowired
	QuestionService questionService;

	@Autowired
	TopicService topicservice;

	@Autowired
	ScoreService Score_service;

	@Autowired
	AttemptedTestService Att_testpaperservice;

//	@Autowired
//	UserService userService;
//
//	@Autowired
//	TopicWiseScoreService topicWiseScoreService;

//	@Transactional
	@Test
	public void TestPapercall() throws IllegalStateException, FileNotFoundException {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

		QuestionService questionService = context.getBean(QuestionService.class);
		questionService.populateQuestion();
		QuestionRepository questionrepo = context.getBean(QuestionRepository.class);
		System.out.println(questionrepo.fetchQuestions());

		TopicService topicservice = context.getBean(TopicService.class);
		topicservice.populateTopics();

		TopicRepository topicRepo = context.getBean(TopicRepository.class);
		System.out.println(topicRepo.FetchTopics());

		TestPaperService testpaperservice = context.getBean(TestPaperService.class);
		testpaperservice.populateTestPaper();

//		TestPaperRepository testPaperRepo = context.getBean(TestPaperRepository.class);
//		System.out.println(testPaperRepo.fetchTestPapers());
//
//		for (TestPaper t : testPaperRepo.fetchTestPapers()) {
//			System.out.println(t.getId() + "  " + t.getTestLevel() + " " + t.getTestName() + "  " + t.getQuestionSet()
//					+ "  " + t.getTopics());
//		}

//		ScoreService Score_service = context.getBean(ScoreService.class);
//		Score_service.populateScore();

//		AttemptedTestService Att_testpaperservice = context.getBean(AttemptedTestService.class);
//		Att_testpaperservice.populateAttemptedTestPaper();

		TopicWiseScoreService topicWiseScoreService = context.getBean(TopicWiseScoreService.class);
		topicWiseScoreService.populateTopicWiseScore();
//
//		UserService userService = context.getBean(UserService.class);
//		userService.populateUser();

	}

}
