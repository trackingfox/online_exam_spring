package com.JPA.onlineExam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.JPA.onlineExam.model.TopicWiseScore;

public interface TopicWiseScoreRepository extends JpaRepository<TopicWiseScore, Long> {

	@Query("FROM TopicWiseScore  where Id>=" + start + " AND Id<=" + end)
	List<TopicWiseScore> Fetch_TopicWiseScoreList(int start, int end);
}
