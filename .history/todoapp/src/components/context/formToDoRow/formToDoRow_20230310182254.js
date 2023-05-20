import React from 'react';

const FormToDoRow = () => (
  <div className="formToDo__Row">
    <label htmlFor="text">{'>'}</label>
    <label htmlFor="text">What needs to be done?</label>
    <input type="text" id="input" />
  </div>
);

export default FormToDoRow;
