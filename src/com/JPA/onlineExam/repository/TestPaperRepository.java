package com.JPA.onlineExam.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.EntityGraph.EntityGraphType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.JPA.onlineExam.model.TestPaper;

public interface TestPaperRepository extends JpaRepository<TestPaper, Long> {

	@EntityGraph(type = EntityGraphType.FETCH, attributePaths = { "topics", "questionSet" })
	@Query("FROM TestPaper where Id>=1 AND Id<=3  ")
	Set<TestPaper> fetchTestPapers();

}
