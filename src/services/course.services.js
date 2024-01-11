import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "books");
class BookDataService {
  addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "books", id);
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };

  getBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return getDoc(bookDoc);
  };
}

export default new BookDataService();
import { db } from "../Firebase configuration";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const courseRequestRef = collection(db, "Courses");
class CourseRequestService {
  addCourses = (newCourse) => {
    return addDoc(courseRequestRef, newCourse);
  };

  updateCourses = (id, updatedCourse) => {
    const CourseDoc = doc(db, "Courses", id);
    return updateDoc(CourseDoc, updatedCourse);
  };

  deleteCourse = (id) => {
    const courseDoc = doc(db, "Courses", id);
    return deleteDoc(courseDoc);
  };

  getAllCourses = () => {
    return getDocs(courseRequestRef);
  };

  getCourse = (id) => {
    const CourseDoc = doc(db, "Courses", id);
    return getDoc(CourseDoc);
  };
}

export default new CourseRequestService();
