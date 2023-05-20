import React from 'react';

const FormToDoRow = () => (
  <div className="formToDo__Row">
    <label className="formToDo__Arrow" htmlFor="input">{'>'}</label>
    <input className="formToDo__Input" id="input" type="text" placeholder="What needs to be done?" id="input" />
  </div>
);

export default FormToDoRow;
