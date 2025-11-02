package com.example.sprinrestApp.dao;


import com.example.sprinrestApp.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseDao extends JpaRepository<Course,Integer> {
}
