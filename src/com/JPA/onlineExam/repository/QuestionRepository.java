package com.JPA.onlineExam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.JPA.onlineExam.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
