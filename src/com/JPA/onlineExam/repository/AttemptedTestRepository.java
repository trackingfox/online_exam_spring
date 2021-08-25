package com.JPA.onlineExam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.JPA.onlineExam.model.AttemptedTest;

public interface AttemptedTestRepository extends JpaRepository<AttemptedTest, Long> {

}
