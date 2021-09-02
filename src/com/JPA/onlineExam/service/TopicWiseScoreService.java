package com.JPA.onlineExam.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JPA.onlineExam.model.Score;
import com.JPA.onlineExam.model.Topic;
import com.JPA.onlineExam.model.TopicWiseScore;
import com.JPA.onlineExam.repository.ScoreRepository;
import com.JPA.onlineExam.repository.TopicRepository;
import com.JPA.onlineExam.repository.TopicWiseScoreRepository;

@Service
public class TopicWiseScoreService {

	@Autowired
	private TopicWiseScoreRepository repository;

	@Autowired
	private TopicRepository repository1;

	@Autowired
	private ScoreRepository repository2;

	public List<TopicWiseScore> createTopicWiseScore() {

		Set<Topic> topics = repository1.FetchTopics();
		List<Score> scores = repository2.FetchScores();

		List<TopicWiseScore> topicWiseScoreList = new ArrayList<>();

//		System.out.println("########");
//		System.out.println(topics.size());
//		System.out.println(scores.size());

		TopicWiseScore St = new TopicWiseScore();
		St.setTopic(topics.iterator().next());
		St.setScore(scores.get(0));

		topicWiseScoreList.add(St);

		TopicWiseScore St1 = new TopicWiseScore();
		St1.setTopic(topics.iterator().next());
		St1.setScore(scores.get(1));

		topicWiseScoreList.add(St1);

		TopicWiseScore St2 = new TopicWiseScore();
		St2.setTopic(topics.iterator().next());
		St2.setScore(scores.get(2));

		topicWiseScoreList.add(St2);

		TopicWiseScore St4 = new TopicWiseScore();
		St4.setTopic(topics.iterator().next());
		St4.setScore(scores.get(3));

		topicWiseScoreList.add(St4);

		TopicWiseScore St5 = new TopicWiseScore();
		St5.setTopic(topics.iterator().next());
		St5.setScore(scores.get(4));

		topicWiseScoreList.add(St5);

		TopicWiseScore St6 = new TopicWiseScore();
		St6.setTopic(topics.iterator().next());
		St6.setScore(scores.get(5));

		topicWiseScoreList.add(St6);

		TopicWiseScore St7 = new TopicWiseScore();
		St7.setTopic(topics.iterator().next());
		St7.setScore(scores.get(6));

		topicWiseScoreList.add(St7);

		TopicWiseScore St8 = new TopicWiseScore();
		St8.setTopic(topics.iterator().next());
		St8.setScore(scores.get(7));

		topicWiseScoreList.add(St8);

		TopicWiseScore St9 = new TopicWiseScore();
		St9.setTopic(topics.iterator().next());
		St9.setScore(scores.get(8));

		topicWiseScoreList.add(St9);

		return topicWiseScoreList;

	}

	public void populateTopicWiseScore() {

		List<TopicWiseScore> topicWiseScoreList = createTopicWiseScore();

		topicWiseScoreList.forEach(x -> repository.save(x));

	}

}
