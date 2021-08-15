package com.JPA.onlineExam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.JPA.onlineExam.model.Topic;

public interface TopicRepository extends JpaRepository<Topic, Long> {

}
