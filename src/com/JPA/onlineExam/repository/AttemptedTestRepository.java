package com.JPA.onlineExam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.JPA.onlineExam.model.AttemptedTest;

@Repository
public interface AttemptedTestRepository extends JpaRepository<AttemptedTest, Long> {

	@EntityGraph(type = EntityGraphType.FETCH, attributePaths = { "test" })
	@Query("FROM AttemptedTest where Id>= ?1 AND Id <= ?2")
	List<AttemptedTest> FetchAttemptedTestPaper1(long start, long end);
}
