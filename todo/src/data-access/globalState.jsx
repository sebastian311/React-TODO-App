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

  function removeItemFromList(index) {
    setTodoList((prevList) => prevList.filter((_, i) => i !== index));
  }

  return (
    <TodoContext.Provider value={{ todoList, addItemToList, removeItemFromList }}>
      {children}
    </TodoContext.Provider>
  );
}
