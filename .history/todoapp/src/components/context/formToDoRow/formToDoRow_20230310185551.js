import React from 'react';

const FormToDoRow = () => (
  <div className="formToDo__Row">
    <label htmlFor="formToDo__Arrow">{">"}</label>
    <input className="formToDo__Input" type="text" placeholder="What needs to be done?" id="input" />
  </div>
);

export default FormToDoRow;
