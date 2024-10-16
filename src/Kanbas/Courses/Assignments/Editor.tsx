import { useParams, useNavigate } from 'react-router-dom';
import { assignments } from "../../Database"
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find((assignment: any) => assignment._id === aid);
  const title = assignment && assignment.title;
  const description = assignment && assignment.description;
  const points = assignment && assignment.points;
  const available_from = assignment && assignment.available_from;
  const available_until = assignment && assignment.available_until;
  const due_date = assignment && assignment.due_date;

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container">
      {/* Assignment Name */}
      <div className="mb-4">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" className="form-control" value={title}/>
      </div>

      {/* Description */}
      <div className="mb-4">
        <textarea id="wd-description" className="form-control" rows={10}>
          {description}
        </textarea>
      </div>

      {/* Points */}
      <div className="row mb-4">
        <div className="col-md-3  text-end">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-9">
          <input id="wd-points" className="form-control" value={points}/>
        </div>
      </div>

      {/* Assignment Group */}
      <div className="row mb-4">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        </div>
        <div className="col-md-9">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
          </select>
        </div>
      </div>

      {/* Display Grade As */}
      <div className="row mb-4">
        <div className="col-md-3  text-end">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        </div>
        <div className="col-md-9">
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage">Percentage</option>
            <option value="Complete/Incomplete">Complete/Incomplete</option>
          </select>
        </div>
      </div>

      {/* Submission Type */}
      <div className="row mb-4">
        <div className="col-md-3 text-end">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>
        <div className="col-md-9">
          <div className="wd-assignment-editor-frame">
            <select id="wd-submission-type" className="form-select">
              <option value="Online">Online</option>
              <option value="On Paper">On Paper</option>
            </select>

            {/* Online Entry Options */}
            <div className="mt-3">
              <label><strong>Online Entry Options</strong></label>
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-text-entry"/>
                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-website-url"
                       defaultChecked/>
                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
              </div>
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-media-recordings"/>
                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div className="form-check mt-3">
                <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-student-annotation"/>
                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
              </div>
              <div className="form-check mt-3 mb-2">
                <input className="form-check-input" type="checkbox" name="onlineEntry" id="wd-file-upload"/>
                <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Assign */}
      <div className="row mb-5">
        <div className="col-md-3 text-end">Assign</div>
        <div className="col-md-9">
          <div className="wd-assignment-editor-frame">
            <label htmlFor="wd-assign-to" className="form-label"><strong>Assign to</strong></label>
            <input id="wd-assign-to" className="form-control" value="Everyone"/>
            {/* Due Date */}
            <label htmlFor="wd-due-date" className="form-label pt-3"><strong>Due</strong></label>
            <input type="date" id="wd-due-date" className="form-control" value={due_date}/>
            {/*From - Until*/}
            <div className="row mt-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label"><strong>Available From</strong></label>
                <input type="date" id="wd-available-from" className="form-control" value={available_from}/>
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                <input type="date" id="wd-available-until" className="form-control" value={available_until}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr/>

      {/* Save and Cancel Buttons */}
      <div className="d-flex justify-content-end">
        <button id="wd-cancel" className="btn btn-secondary me-1"
                onClick={handleNavigation}>
          Cancel
        </button>
        <button id="wd-save" className="btn btn-danger me-2"
                onClick={handleNavigation}>
          Save
        </button>
      </div>
    </div>
  );
}
