import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import CourseRequestService from "../services/course.services";

const CoursesList = ({ getCourseId }) => {
  const [Courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const data = await CourseRequestService.getAllCourses();
    console.log(data.docs);
    setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await CourseRequestService.deleteCourse(id);
    getCourses();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getCourses}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(Courses, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Course Title</th>
            <th>Course Instructor</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Courses.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.Course-title}</td>
                <td>{doc.Course-instructor}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getCourseId(doc.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default CoursesList;
