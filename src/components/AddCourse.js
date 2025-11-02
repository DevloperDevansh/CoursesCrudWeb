import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";

const AddCourse = ({ course = {}, isUpdate = false, onSuccess }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
  });

  // if in update mode, pre-fill form with existing data
  useEffect(() => {
    if (isUpdate && course) {
      setFormData({
        id: course.id,
        title: course.title,
        description: course.description,
      });
    }
  }, [course, isUpdate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isUpdate) {
      // UPDATE existing course
      axios.put(`${base_url}/updateCourse`, formData).then(
        (response) => {
          toast.success("Course updated successfully!");
          if (onSuccess) onSuccess();
        },
        (error) => {
          toast.error("Error updating course!");
        }
      );
    } else {
      // ADD new course
      axios.post(`${base_url}/addCourse`, formData).then(
        (response) => {
          toast.success("Course added successfully!");
          setFormData({ id: "", title: "", description: "" });
          if (onSuccess) onSuccess();
        },
        (error) => {
          toast.error("Error adding course!");
        }
      );
    }
  };

  return (
    <Container className="my-3">
      <h4 className="text-center text-primary">
        {isUpdate ? "Update Course" : "Add New Course"}
      </h4>
      <Form onSubmit={handleFormSubmit} className="shadow-sm p-4 rounded bg-light">
        {!isUpdate && (
          <FormGroup>
            <Label for="id">Course ID</Label>
            <Input
              type="text"
              name="id"
              id="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="Enter course ID"
              required
            />
          </FormGroup>
        )}
        <FormGroup>
          <Label for="title">Course Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter course title"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Course Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter course description"
            required
          />
        </FormGroup>
        <Container className="text-center">
          <Button color={isUpdate ? "warning" : "success"} type="submit">
            {isUpdate ? "Update Course" : "Add Course"}
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default AddCourse;
