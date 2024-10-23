import React from 'react';
import { useState } from 'react';

import './AddItem.scss';

function AddItemComponent() {
  return (
    <>
      <p>Add an item to the list...</p>
      <input type='text'/> <button>ADD</button>
    </>
  );
}

export default AddItemComponent;
