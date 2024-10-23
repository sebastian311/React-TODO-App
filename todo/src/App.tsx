import React from "react";
import "./App.scss";
import AddItemComponent from "./components/AddItemComponent/AddItem";

function AppContent() {
  return (
    <div className="Todo-Container">
      <div className="Title">
        <h1> TO-DO App </h1>
        <p style={{ margin: "-2rem 0 0" }}> My first React App </p>
      </div>

      <div className="Input-Container">
        <AddItemComponent />
      </div>
    </div>
  );
}

function App() {
  return (
      <AppContent />
  );
}

export default App;


