import { useParams } from "react-router";
import { FaCaretDown } from "react-icons/fa6";
import AssignmentsControls from "./AssignmentsControls";
import {BsGripVertical} from "react-icons/bs";
import AssignmentPercentageButtons from "./AssignmentPercentageButtons";
import AssignmentsMoveButtons from "./AssignmentsMoveButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteAssignment, setAssignment} from "./reducer";

export default function Assignments({ isFaculty }: { isFaculty: boolean }) {
  const {cid} = useParams();
  const navigate = useNavigate();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  const handleAddAssignment = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/Editor`);
    dispatch(setAssignment({
      title: "New Assignment",
      description: "New Description",
      points: 100,
      due_date: "",
      available_from: "",
      available_until: "",
    }));
  };

  return (
    <div id="wd-assignments">
        <div><AssignmentsControls
          handleAddAssignment={handleAddAssignment}
          isFaculty={isFaculty}
        /></div>

      <ul id="wd-assignment-list" className="list-group rounded-0 fs-5">
        <div className="wd-assignments-title wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3"/>
          <FaCaretDown className="me-2"/>
          ASSIGNMENTS
          <AssignmentPercentageButtons/>
        </div>
        {courseAssignments.map((assignment: any) => (
          <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center">
            <AssignmentsMoveButtons/>
            <div>
              <a className="wd-assignment-link"
                 href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                {assignment.title}
              </a>
              {/* Assignment Details */}
              <div className="wd-assignment-details">
                <span className="text-danger">Multiple Modules</span> |
                <strong className="ms-2">Not available until</strong> {assignment.available_from} |
                <br/>
                <strong>Due</strong> {assignment.due_date} | {assignment.points} pts
              </div>
            </div>
            <AssignmentControlButtons aid={assignment._id}
            deleteAssignment={(aid) => {
              isFaculty && dispatch(deleteAssignment(aid))}}
            isFaculty={isFaculty}
            />
          </li>
          ))}
      </ul>
    </div>
  );
}
