import React, { useEffect, useState } from 'react'
import Course from './Course';
import axios from "axios";
import base_url from '../api/bootapi';
import {toast} from "react-toastify";

const AllCourses = () => {
    useEffect(() => {
        document.title = "All Course || Learn code with ayush";
    }, [])

    //function to call server
    const getAllCoursefromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                //success
                //console.log(response);
                toast.success("Course has been loaded",{
                    position:'top-center'
                });
                setCourses(response.data);
            },
            (error) => {
                //for error
                console.log("error")
                toast.error("something went wrong!!",{
                    position:'top-center'
                });
            }

        );
    }

    //calling loading course function
    useEffect(()=>{
     getAllCoursefromServer();
    },[])


    //Create array of courses u
    const [courses, setCourses] = useState([]);

    //this function is for remove this course which is deleted from backend then 
    // remove from state
    const removeCourseById = (id)=>{
       setCourses(courses.filter((c) => c.id !== id))
    }

    return (
        <div>
            <h1 className='text-center '>All Courses</h1>
            <p className='text-center'>List of courses are as Follows</p>

            {
                courses.length > 0 ? courses.map((item) => (
                    <Course course={item} removebyId ={removeCourseById}/>
                )) : "No courses"
            }
        </div>
    )
}

export default AllCourses;
