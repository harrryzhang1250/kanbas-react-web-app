export default function AssignmentDeleteConfirm(
  {aid, deleteAssignment,}: {aid: string, deleteAssignment: (aid: string) => void}) {
  return (
    <div id="wd-delete-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Are you sure to remove this assignment? </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              No </button>
            <button onClick={() => deleteAssignment(aid)} type="button" data-bs-dismiss="modal" className="btn btn-danger">
              Yes </button>
          </div>
        </div>
      </div>
    </div>
  );
}