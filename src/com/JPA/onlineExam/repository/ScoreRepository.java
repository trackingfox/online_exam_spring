package com.JPA.onlineExam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.JPA.onlineExam.model.Score;

public interface ScoreRepository extends JpaRepository<Score, Long> {

	@Query("FROM Score where Id>=1 AND Id <=9")
	List<Score> FetchScores();
}
