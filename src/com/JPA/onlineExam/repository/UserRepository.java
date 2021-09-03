package com.JPA.onlineExam.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.JPA.onlineExam.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	@EntityGraph(type = EntityGraphType.FETCH, attributePaths = { "TestPaperList", "attemptTestPaperList", "friends",
			"activity", "TopicWiseScoreList" })
	@Query("FROM User ")
	Set<User> FetchUserFinal();

	@Query("FROM User ")
	List<User> FetchUser();

}
