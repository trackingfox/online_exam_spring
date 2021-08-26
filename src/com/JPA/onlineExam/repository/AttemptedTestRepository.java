package com.JPA.onlineExam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.JPA.onlineExam.model.AttemptedTest;

public interface AttemptedTestRepository extends JpaRepository<AttemptedTest, Long> {

//	@Query("FROM AttemptedTest where Id>=" + start + " AND Id <=" + end)
//	List<AttemptedTest> FetchAttemptedTestPaper1(int start, int end);
}
