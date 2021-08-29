package com.JPA.onlineExam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.JPA.onlineExam.model.AttemptedTest;

public interface AttemptedTestRepository extends JpaRepository<AttemptedTest, Long> {

	@Query("FROM AttemptedTest where Id>= ?1 AND Id <= ?2")
	List<AttemptedTest> FetchAttemptedTestPaper1(long start, long end);
}
