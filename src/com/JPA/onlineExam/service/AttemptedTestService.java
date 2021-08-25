package com.JPA.onlineExam.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import com.JPA.onlineExam.model.AttemptedTest;
import com.JPA.onlineExam.model.Question;
import com.JPA.onlineExam.model.Score;
import com.JPA.onlineExam.model.TestPaper;
import com.JPA.onlineExam.repository.AttemptedTestRepository;
import com.JPA.onlineExam.repository.ScoreRepository;
import com.JPA.onlineExam.repository.TestPaperRepository;

public class AttemptedTestService {

	@Autowired
	private AttemptedTestRepository repository;

	@Autowired
	private TestPaperRepository repository2;

	@Autowired
	private ScoreRepository repository3;

	public AttemptedTestRepository getRepository() {
		return repository;
	}

	public void setRepository(AttemptedTestRepository repository) {
		this.repository = repository;
	}

	public List<AttemptedTest> createAttemptedTest() {

//	    create the attempted test object  
		List<TestPaper> test = repository2.fetchTestPapers();
		Map<Question, Character> hashmap = new HashMap<Question, Character>();
		List<AttemptedTest> AttemptedTestPaperList = new ArrayList<>();

		AttemptedTest test2 = new AttemptedTest();
		List<Score> scores = repository3.FetchScores();

		int finalScore = 0;
		int k = 0;
		for (TestPaper test1 : test) {

			int no_of_attempt = (int) (Math.random() * (3 - 1 + 1) + 1);

			for (int i = 0; i < no_of_attempt; i++) {

				test2.setTest(test1);
				finalScore = calculateFinalScore(test1);
				hashmap = testAnswers(test1);
				test2.setFinalScore(finalScore);
				test2.setQuestionAnswersSet(hashmap);
				test2.setScore(scores.get(k));
				AttemptedTestPaperList.add(test2);
				k++;

			}

		}
		return AttemptedTestPaperList;
	}

	public void populateAttemptedTestPaper() {
		List<AttemptedTest> Att_testPaperList = createAttemptedTest();

		Att_testPaperList.forEach(x -> repository.save(x));

	}

	public int calculateFinalScore(TestPaper testPaper) {

		int finalScore = 0;
		Map<Question, Character> hashmap = new HashMap<Question, Character>();
		hashmap = testAnswers(testPaper);

		// printing the objects of hashmap
		Set<Map.Entry<Question, Character>> entries = hashmap.entrySet();
		for (Map.Entry<Question, Character> hm : entries) {
			String ans = hm.getKey().getAnswer();
			char user_ans = hm.getValue();
			String st = Character.toString(user_ans);
			// System.out.println(x + " : " + y);
			if (ans.equals(st)) {
				finalScore += 1;
			}

		}

		return finalScore;
	}

	public Map<Question, Character> testAnswers(TestPaper testPaper) {

		Map<Question, Character> hashmap = new HashMap<Question, Character>();

		char user_ans = ' ';
		char[] alphabet = { 'A', 'B', 'C', 'D' };

		// user_ans=(int)(Math.random()*(max-min+1)+min);
		// System.out.println(testPaper.toString());

		List<Question> obj1 = testPaper.getQuestionSet();
		for (Question q : obj1) {
			user_ans = alphabet[(int) (Math.random() * 10 % 4)];
			hashmap.put(q, user_ans);
			// System.out.println(q.toString());
		}

		return hashmap;

	}

}
