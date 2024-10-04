import { NavLink } from "react-router-dom";
import {useParams} from "react-router";

export default function CoursesNavigation() {
  const { cid } = useParams();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink to={`/Kanbas/Courses/${cid}/Home`} id="wd-course-home-link"
               className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        Home
      </NavLink>
      <NavLink to={`/Kanbas/Courses/${cid}/Modules`} id="wd-course-modules-link"
               className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        Modules
      </NavLink>
      <NavLink to={`/Kanbas/Courses/${cid}/Piazza`} id="wd-course-piazza-link"
               className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        Piazza
      </NavLink>
      <NavLink to={`/Kanbas/Courses/${cid}/Zoom`} id="wd-course-zoom-link"
               className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        Zoom
      </NavLink>
      <NavLink to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-course-quizzes-link"
               className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        Assignments
      </NavLink>
      <NavLink to={`/Kanbas/Courses/${cid}/Quizzes`} id="wd-course-assignments-link"
               className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        Quizzes
      </NavLink>
      <NavLink to={`/Kanbas/Courses/${cid}/People`} id="wd-course-people-link"
               className={({ isActive }) => `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}>
        People
      </NavLink>
    </div>
  );
}