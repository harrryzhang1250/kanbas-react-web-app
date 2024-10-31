import GreenCheckmark from "../Modules/GreenCheckmark";
import {IoEllipsisVertical} from "react-icons/io5";
import React from "react";
import {FaTrash} from "react-icons/fa";
import AssignmentDeleteConfirm from "./AssignmentDeleteConfirm";

export default function AssignmentControlButtons({aid, deleteAssignment, isFaculty, }:
{aid: string, deleteAssignment: (aid: string) => void, isFaculty:boolean}) {
  return (
    <div className="d-flex align-items-center ms-auto">
      {isFaculty && <FaTrash className="text-danger me-3 mb-1"
                     data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog"/>}
      <GreenCheckmark/>
      <IoEllipsisVertical className="ms-3 mb-1 fs-4"/>
      <AssignmentDeleteConfirm aid={aid} deleteAssignment={deleteAssignment}/>
    </div>
  )
}