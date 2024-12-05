import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import {useEffect, useState} from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import {useSelector} from "react-redux";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

export default function Kanbas() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  const addNewCourse = async() => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };
  const deleteCourse = async(courseId: string) => {
    const status = await courseClient.deleteCourse(courseId)
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = async() => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => ( c._id === course._id ? course : c )));
    setCourse({ ...course, name: "New Course", description: "New Description"});
  };


  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation/>
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account"/>}/>
            <Route path="/Account/*" element={<Account/>}/>
            <Route path="/Dashboard" element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  isFaculty={isFaculty}
                  enrolling={enrolling}
                  setEnrolling={setEnrolling}
                />
              </ProtectedRoute>
            }/>
            <Route path="/Courses/:cid/*" element={
              <ProtectedRoute>
                <Courses
                  courses={courses}
                  isFaculty={isFaculty}
                />
              </ProtectedRoute>
            }/>
            <Route path="/Calendar" element={<h1>Calendar</h1>}/>
            <Route path="/Inbox" element={<h1>Inbox</h1>}/>
          </Routes>
        </div>
      </div>
    </Session>
  );
}
