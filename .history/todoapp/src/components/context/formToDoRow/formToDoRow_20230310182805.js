import React from 'react';

const FormToDoRow = () => (
  <div className="formToDo__Row">
    <label htmlFor="text">{'>'}</label>
    <input type="text" value="What needs to be done?" id="input" />
  </div>
);

export default FormToDoRow;
