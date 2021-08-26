//package com.JPA.onlineExam.service;
//
//import java.util.ArrayList;
//import java.util.Collections;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//
//import com.JPA.onlineExam.model.AttemptedTest;
//import com.JPA.onlineExam.model.TestPaper;
//import com.JPA.onlineExam.model.TopicWiseScore;
//import com.JPA.onlineExam.model.User;
//import com.JPA.onlineExam.repository.AttemptedTestRepository;
//import com.JPA.onlineExam.repository.TestPaperRepository;
//import com.JPA.onlineExam.repository.TopicWiseScoreRepository;
//import com.JPA.onlineExam.repository.UserRepository;
//
//public class UserService {
//
//	@Autowired
//	private UserRepository repository;
//
//	@Autowired
//	private TestPaperRepository repository1;
//
//	@Autowired
//	private AttemptedTestRepository repository2;
//
//	@Autowired
//	private TopicWiseScoreRepository repository3;
//
//	public List<User> createUser() {
//
//		User user1 = new User();
//		User user2 = new User();
//		User user3 = new User();
////		User user4 = new User();
////		User user5 = new User();
////		User user6 = new User();
////		User user7 = new User();
////		User user8 = new User();
//
//		List<User> userList = new ArrayList<>();
//
//		List<TestPaper> TestPaperList = repository1.fetchTestPapers();
//
//		List<AttemptedTest> attemptTestPaperList = repository2.FetchAttemptedTestPaper1(1, 2);
//
//		List<TopicWiseScore> TopicWiseScoreList = repository3.Fetch_TopicWiseScoreList(1, 3);
//		// System.out.println("jabjka : " + TopicWiseScoreList);
//
//		// List<User> friends = new ArrayList<User>();
//
//		user1.setUserName("Sharif");
//		user1.setPassword("password1");
//		user1.setTestPaperList(TestPaperList);
//		user1.setAttemptTestPaperList(attemptTestPaperList);
//		user1.setTopicWiseScoreList(TopicWiseScoreList);
//
//		// user1.setFriends(friends);
//
//		userList.add(user1);
//
//		attemptTestPaperList = repository2.FetchAttemptedTestPaper1(3, 4);
//		TopicWiseScoreList = repository3.Fetch_TopicWiseScoreList(4, 6);
//		// System.out.println("jabjk1 : " + TopicWiseScoreList);
//		user2.setUserName("Ramesh");
//		user2.setPassword("password2");
//		user2.setTestPaperList(TestPaperList);
//		user2.setAttemptTestPaperList(attemptTestPaperList);
//		user2.setTopicWiseScoreList(TopicWiseScoreList);
////		 user2.setFriends(friends);
//
//		userList.add(user2);
//
//		attemptTestPaperList = repository2.FetchAttemptedTestPaper1(5, 6);
//		TopicWiseScoreList = repository3.Fetch_TopicWiseScoreList(7, 9);
//		user3.setUserName("Nilesh");
//		user3.setPassword("password3");
//		user3.setTestPaperList(TestPaperList);
//		user3.setAttemptTestPaperList(attemptTestPaperList);
//		user3.setTopicWiseScoreList(TopicWiseScoreList);
//////		user3.setFriends(friends);
////
//		userList.add(user3);
//
////		atemptTestSet = FetchAttemptedTestPaper1(7, 8, em);
////		scoreTopic = Fetch_scoreTopic(em);
////		user4.setUserName("Somesh");
////		user4.setPassword("password4");
////		user4.setUnattemptTestSet(unattemptTestSet);
////		user4.setAtemptTestSet(atemptTestSet);
////		user4.setScoreTopic(scoreTopic);
////////	    user4.setFriends(friends);
//////
////		em.merge(user4);
////
////		atemptTestSet = FetchAttemptedTestPaper1(9, 10, em);
////		scoreTopic = Fetch_scoreTopic(em);
////		user5.setUserName("Farukh");
////		user5.setPassword("password5");
////		user5.setUnattemptTestSet(unattemptTestSet);
////		user5.setAtemptTestSet(atemptTestSet);
////		user5.setScoreTopic(scoreTopic);
////
////		em.merge(user5);
////
////		atemptTestSet = FetchAttemptedTestPaper1(11, 12, em);
////		scoreTopic = Fetch_scoreTopic(em);
////		user6.setUserName("Sarukh");
////		user6.setPassword("password6");
////		user6.setUnattemptTestSet(unattemptTestSet);
////		user6.setAtemptTestSet(atemptTestSet);
////		user6.setScoreTopic(scoreTopic);
////
////		em.merge(user6);
////
////		atemptTestSet = FetchAttemptedTestPaper1(13, 14, em);
////		scoreTopic = Fetch_scoreTopic(em);
////		user7.setUserName("Amir");
////		user7.setPassword("password7");
////		user7.setUnattemptTestSet(unattemptTestSet);
////		user7.setAtemptTestSet(atemptTestSet);
////		user7.setScoreTopic(scoreTopic);
////
////		em.merge(user7);
////
////		atemptTestSet = FetchAttemptedTestPaper1(15, 16, em);
////		scoreTopic = Fetch_scoreTopic(em);
////		user8.setUserName("Alam");
////		user8.setPassword("password8");
////		user8.setUnattemptTestSet(unattemptTestSet);
////		user8.setAtemptTestSet(atemptTestSet);
////		user8.setScoreTopic(scoreTopic);
////
////		em.merge(user8);
//
////		update_userToDb();
//
//		return userList;
//	}
//
//	public List<User> update_userToDb() {
//
//		List<User> friends = new ArrayList<User>();
//
//		List<User> User_obj = new ArrayList<User>();
//		User_obj = repository.FetchUser();
//
//		List<User> final_userList = new ArrayList<User>();
//
//		for (User u : User_obj) {
//			friends = Fetch_friendList();
//			u.setFriends(friends);
//			final_userList.add(u);
//		}
//
//		return final_userList;
//
//	}
//
//	public List<User> Fetch_friendList() {
//
//		List<User> users = repository.FetchUser();
//
//		Collections.shuffle(users);
//
//		// System.out.println(users.size());
//
//		int length = (int) (Math.random() * (3 - 1 + 1) + 1);
//		// System.out.println(length);
//		List<User> randomUsers = users.subList(0, length);
//
////		for (User obj : randomUsers) {
////
////			System.out.println(obj.getUserName() + " " + obj.getPassword());
////		}
//		return randomUsers;
//	}
//
//	public void populateUser() {
//		List<User> userList = createUser();
//
//		userList.forEach(x -> repository.save(x));
//
//		List<User> final_userList = update_userToDb();
//		final_userList.forEach(x -> repository.save(x));
//
//	}
//
//}
