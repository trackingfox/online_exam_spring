package com.JPA.onlineExam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.JPA.onlineExam.model.Question;
import com.JPA.onlineExam.model.TestPaper;
import com.JPA.onlineExam.model.Topic;

public interface TestPaperRepository extends JpaRepository<TestPaper, Long> {

	@Query("FROM Question where Id>=FLOOR(RAND()*(25-10+1))+10 AND Id<FLOOR(RAND()*(50-10+1))+30 ")
	List<Question> fetchQuestions();

	@Query("FROM Topic where Id>=1 AND Id <=3")
	List<Topic> FetchTopics();

}
