import React, { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';

import "./App.scss";
import AddItemComponent from "./components/AddItemComponent/AddItem";
import { GlobalState, TodoState } from "./data-access/global-state";
import { Action, ListItem } from "./data-access/models.interface";

function AppContent() {
  const {state, dispatch}: {state: TodoState, dispatch: React.Dispatch<Action>} = useContext(GlobalState);
  const delItem = (task: ListItem) => {
    dispatch({ type: "DEL", payload: {uuid: task.uuid, identifier: task.identifier} })
  }


  return (
    <div className="Todo-Container">
      <div className="Title">
        <h1> TO-DO App </h1>
        <p style={{ margin: "-2rem 0 0" }}> My first React App </p>
      </div>

      <div className="Input-Container">
        <AddItemComponent />
      </div>
      {state.tasks.map((task: ListItem) => (
        <div key={task.uuid} className="task">
          <span className="task-text"> { task.identifier } </span>
          <button className="task-button" onClick={() => delItem(task)}>X</button>
        </div>
      ) )};
    </div>
  );
}

function App() {
  return (
      <AppContent />
  );
}

export default App;


