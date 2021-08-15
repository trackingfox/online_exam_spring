package com.JPA.onlineExam.service;

import java.util.List;

import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JPA.onlineExam.model.Question;
import com.JPA.onlineExam.model.TestPaper;
import com.JPA.onlineExam.repository.TestPaperRepository;

@Service
public class TestPaperService {

	@Autowired
	private TestPaperRepository repository;

	public TestPaperRepository getRepository() {
		return repository;
	}

	public void setRepository(TestPaperRepository repository) {
		this.repository = repository;
	}

	public void generateTestPaper() {
		
		
		for (int i = 1; i <= 4; i++) {
			Query query = em.createQuery(
					"FROM Question where Id>=FLOOR(RAND()*(25-10+1))+10 AND Id<FLOOR(RAND()*(50-10+1))+30 ");
			List<Question> results = query.getResultList();

		
		
		
		TestPaper test1 = new TestPaper();
		test1.setQuestionSet(results);
		test1.setTestName("Full Stack JAVA");
		test1.setTestLevel("I");
		

	}

	public void populateTestPaper() {
		List<TestPaper> testPaperList = generateTestPaper();

		testPaperList.forEach(x -> repository.save(x));

	}
}
