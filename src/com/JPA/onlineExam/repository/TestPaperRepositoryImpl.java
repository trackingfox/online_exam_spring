package com.JPA.onlineExam.repository;

import java.util.List;

import javax.persistence.Query;

import com.JPA.onlineExam.model.Question;

public class TestPaperRepositoryImpl {

	public void createTestPaper() {

		for (int i = 1; i <= 4; i++) {

			@Query("FROM Question where Id>=FLOOR(RAND()*(25-10+1))+10 AND Id<FLOOR(RAND()*(50-10+1))+30 ")
			List<Question> results;
		}

	}
}
