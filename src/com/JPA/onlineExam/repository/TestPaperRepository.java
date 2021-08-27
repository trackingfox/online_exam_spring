package com.JPA.onlineExam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.JPA.onlineExam.model.TestPaper;

public interface TestPaperRepository extends JpaRepository<TestPaper, Long> {

	@Query("FROM TestPaper where Id>=1 AND Id<=3 ")
	List<TestPaper> fetchTestPapers();

}
