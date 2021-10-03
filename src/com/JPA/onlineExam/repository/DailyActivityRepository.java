package com.JPA.onlineExam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.JPA.onlineExam.model.DailyActivity;

@Repository
public interface DailyActivityRepository extends JpaRepository<DailyActivity, Long> {

}
