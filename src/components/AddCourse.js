import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import CourseRequestService from "../services/course.services";

const addCourses = ({ id, setCourseId }) => {
  const [Course-title, setCourse-title] = useState("");
  const [Course-instructor, setCourse-instructor] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (Course title === "" || Course instructor === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newCourse = {
      Course title,
      Course instructor,
      status,
    };
    console.log(newCourse);

    try {
      if (id !== undefined && id !== "") {
        await CourseRequestService.updateCourses(id, newCourse);
        setCourseId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await CourseRequestService.addCourses(newCourse);
        setMessage({ error: false, msg: "New Course requested successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setCoursetitle("");
    setCourseinstructor("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setAuthor(docSnap.data().author);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formCourseTitle">
            <InputGroup>
              <InputGroup.Text id="formCourseTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Course Title"
                value={Course-title}
                onChange={(e) => setCoursetitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCourseInstructor">
            <InputGroup>
              <InputGroup.Text id="formCourseInstructor">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Course Instructor"
                value={Course-instructor}
                onChange={(e) => setCourseinstructor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddBook;
