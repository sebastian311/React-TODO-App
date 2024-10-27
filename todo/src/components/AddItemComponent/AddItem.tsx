import React, { Dispatch, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalState, TodoState } from '../../data-access/global-state';
import { Action } from '../../data-access/models.interface';
import './AddItem.scss';


function AddItemComponent() {
  const {state, dispatch}: {state: TodoState, dispatch: Dispatch<Action>} = useContext(GlobalState);
  const addItem = () => {
    dispatch({ type: 'ADD', payload: { uuid: uuidv4(), identifier: inputModel} })
  }

  const [inputModel, setInputModel] = useState("");

  function addItemToList(): void {
    if(!inputModel) return;
    addItem();
    setInputModel('');
  }

  return (
    <>
      <p>Add an item to the list...</p>
      <input 
        type='text'
        value={inputModel}
        onChange={e => setInputModel(e.target.value)}
       />   
       <button onClick={() => addItemToList()}>ADD</button>
    </>
  );
}

export default AddItemComponent;
