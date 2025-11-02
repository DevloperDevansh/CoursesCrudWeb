package com.example.sprinrestApp.service;

import com.example.sprinrestApp.dao.CourseDao;
import com.example.sprinrestApp.entities.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    private CourseDao courseDao;

    //create own list of courses
    //List<Course> list;

    public CourseServiceImpl() {
//        list = new ArrayList<>();
//
//        list.add(new Course(101,"Java course","This course is good"));
//        list.add(new Course(102,"Python course","This course is very good"));
//        list.add(new Course(103,"My sql course","This course is so good"));
    }

    //get all course
    @Override
    public List<Course> getCourses() {
        List<Course> allCourselist = courseDao.findAll();
        return allCourselist;
    }

    //get single course
    @Override
    public Course getSingleCourse(long courseId) {
//        Course c = null;
//
//        for(Course course:list){
//            if(course.getId()==courseId){
//                c = course;
//                break;
//            }
//        }

        Course singleCourse = courseDao.getById((int) courseId);
        return singleCourse;
    }

    //add course
    @Override
    public Course addCourse(Course course) {
//        list.add(course);
        Course saveCourse = courseDao.save(course);
        return saveCourse;
    }

    //update course
    @Override
    public Course updateCourse(Course course) {
        Optional<Course> existingCourseOpt = courseDao.findById((int) course.getId());

        if (existingCourseOpt.isPresent()) {
            Course existingCourse = existingCourseOpt.get();
            existingCourse.setTitle(course.getTitle());
            existingCourse.setDescription(course.getDescription());
            return courseDao.save(existingCourse);  // performs update
        } else {
            throw new RuntimeException("Course not found with ID: " + course.getId());
        }
    }


    @Override
    public void deleteCourse(long lId) {
//        list = list.stream().filter(e -> e.getId() != lId).collect(Collectors.toList());
        Course entity = courseDao.getById((int) lId);
        courseDao.delete(entity);
    }


}
