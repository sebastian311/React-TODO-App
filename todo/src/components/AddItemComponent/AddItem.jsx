import { useState } from 'react';
import { useTodoContext } from '../../data-access/globalState'; 
import './AddItem.scss';

function AddItemComponent() {
  const [inputValue, setInputValue] = useState('');
  const { addItemToList } = useTodoContext();

  function addNewItem() {
    if(inputValue.trim()) {
      addItemToList(inputValue);
      setInputValue('');
    }
  }

  return (
    <>
      <p>Add an item to the list...</p>
      <input type='text' value={ inputValue } onChange={(e) => setInputValue(e.target.value)} /> <button onClick={addNewItem}>ADD</button>
    </>
  );
}

export default AddItemComponent;
