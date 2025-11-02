import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Card, CardBody, CardTitle, CardText, Button, Container,
} from "reactstrap";
import base_url from "../api/bootapi";
import AddCourse from "./AddCourse";

const Course = ({ course, removebyId }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const deleteCourse = (id) => {
    axios.delete(`${base_url}/course/${id}`).then(
      (response) => {
        toast.success("Course deleted!");
        removebyId(id);
      },
      (error) => {
        toast.error("Course not deleted! Server problem.");
      }
    );
  };

  return (
    <Card className="text-center my-3 shadow-sm">
      <CardBody>
        <CardTitle tag="h5" className="fw-bold text-primary">
          {course.title}
        </CardTitle>
        <CardText>{course.description}</CardText>

        <Container className="text-center">
          <Button
            color="danger"
            className="mx-2"
            onClick={() => deleteCourse(course.id)}
          >
            Delete
          </Button>
          <Button
            color="warning"
            className="mx-2"
            onClick={() => setShowUpdateForm(!showUpdateForm)}
          >
            {showUpdateForm ? "Close" : "Update"}
          </Button>
        </Container>

        {/* Reuse AddCourse form in update mode */}
        {showUpdateForm && (
          <AddCourse
            course={course}
            isUpdate={true}
            onSuccess={() => setShowUpdateForm(false)}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default Course;
