package com.JPA.onlineExam.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.JPA.onlineExam.model.Topic;

public interface TopicRepository extends JpaRepository<Topic, Long> {

	@Query("FROM Topic where Id>=1 AND Id <=3")
	Set<Topic> FetchTopics();

}
