import React from 'react';

const FormToDoRow = () => (
  <div className="formToDo__Row">
    <label htmlFor="text">{'>'}</label>
    <label htmlFor="text2">What needs to be done?</label>
    <input type="text text2" id="input" />
  </div>
);

export default FormToDoRow;
