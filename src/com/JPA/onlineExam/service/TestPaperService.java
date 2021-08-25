package com.JPA.onlineExam.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JPA.onlineExam.model.Question;
import com.JPA.onlineExam.model.TestPaper;
import com.JPA.onlineExam.model.Topic;
import com.JPA.onlineExam.repository.QuestionRepository;
import com.JPA.onlineExam.repository.TestPaperRepository;
import com.JPA.onlineExam.repository.TopicRepository;

@Service
public class TestPaperService {

	@Autowired
	private TestPaperRepository repository;

	@Autowired
	private QuestionRepository repository2;

	@Autowired
	private TopicRepository repository3;

	public TestPaperRepository getRepository() {
		return repository;
	}

	public void setRepository(TestPaperRepository repository) {
		this.repository = repository;
	}

	public List<TestPaper> generateTestPaper() {

		List<TestPaper> testPaperList = new ArrayList<>();

		List<Topic> topics = repository3.FetchTopics();

		for (int i = 1; i <= 3; i++) {

			List<Question> results = repository2.fetchQuestions();
			System.out.println(results.size());
			// System.out.println(results.toString());
			TestPaper test1 = new TestPaper();
			test1.setQuestionSet(results);
			test1.setTestName("Full Stack JAVA");
			test1.setTestLevel("I");
			test1.setTopics(topics);
			testPaperList.add(test1);
		}
		return testPaperList;

	}

	public void populateTestPaper() {
		List<TestPaper> testPaperList = generateTestPaper();

		testPaperList.forEach(x -> repository.save(x));

	}

//	@Test
//	public void generateTestPaper1() {
//
//		EntityManagerFactory emf = Persistence.createEntityManagerFactory("JPA_Online_Exam");
//		EntityManager em = emf.createEntityManager();
//		em.getTransaction().begin();
//
//		List<Topic> topics = repository3.FetchTopics();
//		for (Topic obj : topics) {
//			//
//			System.out.println(obj);
//		}
//
//		for (int i = 1; i <= 4; i++) {
//			Query query = em.createQuery(
//					"FROM Question where Id>=FLOOR(RAND()*(25-10+1))+10 AND Id<FLOOR(RAND()*(50-10+1))+30 ");
//			List<Question> results = query.getResultList();
//
////			for (Question obj : results) {
////				System.out.println(obj.getQuestion() + "   " + obj.getChoice_1() + "   " + obj.getChoice_2() + "    "
////						+ obj.getChoice_3() + "    " + obj.getChoice_4());
////
////			}
//
//			// int ran = (int) (Math.random() * (3 - 1 + 1) + 1);
//
//			TestPaper test1 = new TestPaper();
//			test1.setQuestionSet(results);
//			test1.setTestName("Full Stack JAVA");
//			test1.setTestLevel("I");
//			test1.setTopics(topics);
//			em.merge(test1);
//
//		}
//
//		em.getTransaction().commit();
//		em.close();
//		emf.close();
//
//	}

}
