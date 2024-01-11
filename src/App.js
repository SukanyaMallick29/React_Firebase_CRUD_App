import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import addCourses from "./components/AddCourses";
import BooksList from "./components/CourseList";
import "./App.css";

function App() {
  const [CourseId, setCourseId] = useState("");

  const getCourseIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setCourseId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase </Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id={CourseId} setCourseId={setCourseId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList getCourseId={getCourseIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
