import CoursesNavigation from "./Navigation";
import {Navigate, Route, Routes, useParams} from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import {FaAlignJustify} from "react-icons/fa";
import PeopleTable from "./People/Table";
export default function Courses() {
  const { cid } = useParams();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        {/*me-4: right margin (end margin) of 1.5rem (24px)*/}
        {/*fs-4: This sets the font size to the fourth size*/}
        {/*mb-1: This adds a small bottom margin (0.25rem or 4px), which separates the icon from the text underneath.*/}
        <FaAlignJustify className="me-4 fs-4 mb-1"/>
        Course {cid} </h2>
      <hr/>
      {/*applies the Flex Container, enabling flexbox layout inside that div*/}
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation/>
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home"/>}/>
            <Route path="Home" element={<Home/>}/>
            <Route path="Modules" element={<Modules/>}/>
            <Route path="Assignments" element={<Assignments/>}/>
            <Route path="Assignments/:aid" element={<AssignmentEditor/>}/>
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
