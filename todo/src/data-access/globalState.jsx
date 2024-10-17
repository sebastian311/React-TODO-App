import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export function useTodoContext() {
  return useContext(TodoContext);
}

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  function addItemToList(item) {
    setTodoList((prevList) => [...prevList, item]);
  }

  return (
    <TodoContext.Provider value={{ todoList, addItemToList }}>
      {children}
    </TodoContext.Provider>
  );
}
