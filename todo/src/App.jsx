import "./App.scss";
import AddItemComponent from "./components/AddItemComponent/AddItem";

import { TodoProvider, useTodoContext } from "./data-access/globalState";

function AppContent() {
  const { todoList } = useTodoContext();

  return (
    <div className="Todo-Container">
      <div className="Title">
        <h1> TO-DO App </h1>
        <p style={{ margin: "-2rem 0 0" }}> My first React App </p>
      </div>

      <div className="Input-Container">
        <AddItemComponent />
      </div>

      {todoList.map((item, index) => (
        <div key={index} className="Todo-Item">
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <TodoProvider>
      <AppContent />
    </TodoProvider>
  );
}

export default App;
