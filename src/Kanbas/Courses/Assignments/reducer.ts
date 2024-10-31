import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
  newAssignment: {
    title: "New Assignment",
    description: "New Description",
    points: 100,
    due_date: "",
    available_from: "",
    available_until: "",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers:{
    addAssignment: (state, action) => {
      state.assignments = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.assignments,
      ];
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    deleteAssignment: (state, { payload: aid}) => {
      state.assignments = state.assignments.filter(
        (assignments: any) => assignments._id !== aid
      );
    },
    setAssignment: (state, action) => {
      state.newAssignment = action.payload;
    },
  },
});
export const { addAssignment, updateAssignment, setAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;