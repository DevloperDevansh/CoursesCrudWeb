package com.example.sprinrestApp.controller;

import com.example.sprinrestApp.entities.Course;
import com.example.sprinrestApp.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MyController {

    //create course service variable
    @Autowired
    private CourseService courseService;

    @GetMapping("/home")
    public String home(){
        return "Welcome to course Application";
    }

    //get the courses
    @GetMapping("/courses")
    public List<Course> getCourse(){
        List<Course> courses = courseService.getCourses();
        return courses;
    }

    //get single course by id
    @GetMapping("/courses/{courseId}")
    public Course getSingleCourse(@PathVariable String courseId){
        Course singleCourse = courseService.getSingleCourse(Long.parseLong(courseId));
        return singleCourse;
    }

    //add course
    @PostMapping("/addCourse")
    public Course addCourse(@RequestBody Course course){
        return courseService.addCourse(course);
    }

    //put request
    //update the course
    @PutMapping("/updateCourse")
    public Course updateCourse(@RequestBody Course course){
        Course updatecourse = courseService.updateCourse(course);
        return updatecourse;
    }

    @DeleteMapping("/course/{courseId}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
        try{
            this.courseService.deleteCourse(Long.parseLong(courseId));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
