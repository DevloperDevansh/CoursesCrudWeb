import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menus = () => {
  return (
    <div className="p-3 bg-light rounded shadow-sm">
      <h4 className="text-center text-primary mb-4">Course Manager</h4>
      {/* To is used remove refreshing in react app */}     
      <ListGroup>
        <ListGroupItem
          tag={Link}
          to="/"
          action
          className="fw-semibold text-dark"
          
        >
          🏠 Home
        </ListGroupItem>

        <ListGroupItem
          tag={Link}
       
          to="/add-courses"
          action
          className="fw-semibold text-dark"
        >
          ➕ Add Course
        </ListGroupItem>

        <ListGroupItem
          tag={Link}
          to="/view-courses"
          action
          className="fw-semibold text-dark"
          
        >
          📖 View Courses
        </ListGroupItem>

        <ListGroupItem
          tag={Link}
          to="/about"
          action
          className="fw-semibold text-dark"
          
        >
          ℹ️ About
        </ListGroupItem>

        <ListGroupItem
          tag={Link}
          to="/contact"
          action
          className="fw-semibold text-dark"
        >
          📞 Contact Us
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Menus;
