import './App.css';
import Header from './components/Header';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer } from "react-toastify";
import Home from './components/Home';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container>
          <Row>
            {/* First column */}
            <Col md={4}>
              <Menus />
            </Col>

            {/* Second column */}
            <Col md={8}>
              {/* ✅ Wrap routes inside <Routes> */}
              <Routes>
                {/* ✅ Use element instead of Component */}
                <Route path='/' Component={Home} />
                <Route path='/add-courses' Component={AddCourse} />
                <Route path='/view-courses' Component={AllCourses} />
              </Routes>
            </Col>
          </Row>
        </Container>
       
      </Router>
    </div>
  );
}

export default App;
