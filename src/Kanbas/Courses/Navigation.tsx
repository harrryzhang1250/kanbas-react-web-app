import { Link, useLocation } from "react-router-dom";
import {useParams} from "react-router";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} to={`/Kanbas/Courses/${cid}/${link}`}
          id={`wd-course-${link}-link`}
          className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}