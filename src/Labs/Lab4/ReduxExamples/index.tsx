import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CountRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todo/TodoList";

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterRedux/>
      <AddRedux/>
      <TodoList/>
    </div>
  );
};
