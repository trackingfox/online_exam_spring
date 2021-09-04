package com.JPA.onlineExam.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.JPA.onlineExam.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	@EntityGraph(type = EntityGraphType.FETCH, attributePaths = { "TestPaperList", "TestPaperList.topics",
			"TestPaperList.questionSet", "attemptTestPaperList", "attemptTestPaperList.questionAnswersSet", "friends",
			"activity", "TopicWiseScoreList" })
	@Query("FROM User ")
	Set<User> FetchUserFinal();

	@EntityGraph(type = EntityGraphType.FETCH, attributePaths = { "TestPaperList", "TestPaperList.topics",
			"TestPaperList.topics", "attemptTestPaperList", "attemptTestPaperList.questionAnswersSet", "friends",
			"activity", "TopicWiseScoreList" })
	@Query("FROM User ")
	List<User> FetchUser();

}
