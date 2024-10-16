import { useParams } from "react-router";
import { assignments } from "../../Database"
import { FaCaretDown } from "react-icons/fa6";
import AssignmentsControls from "./AssignmentsControls";
import {BsGripVertical} from "react-icons/bs";
import AssignmentPercentageButtons from "./AssignmentPercentageButtons";
import AssignmentsMoveButtons from "./AssignmentsMoveButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const {cid} = useParams();
  return (
    <div id="wd-assignments">
        <div><AssignmentsControls/></div>

      <ul id="wd-assignment-list" className="list-group rounded-0 fs-5">
        <div className="wd-assignments-title wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3"/>
          <FaCaretDown className="me-2"/>
          ASSIGNMENTS
          <AssignmentPercentageButtons/>
        </div>
        {assignments.filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
              <AssignmentsMoveButtons/>
              <div>
                {/* Assignment Title Link */}
                <a className="wd-assignment-link"
                   href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </a>
                {/* Assignment Details */}
                <div className="wd-assignment-details">
                  <span className="text-danger">Multiple Modules</span> |
                  <strong className="ms-2">Not available until</strong> May 6 at 12:00am |
                  <br/>
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              <AssignmentControlButtons/>
            </li>
          ))}
      </ul>
    </div>
  );
}
