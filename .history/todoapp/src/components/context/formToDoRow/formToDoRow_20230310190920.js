import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FormToDoRow = () => (
  <div className="formToDo__Row">
    <label className="formToDo__Arrow" htmlFor="input">{'>'}</label>
    <input className="formToDo__Input" type="text" placeholder="What needs to be done?" id="input" />
  </div>
);

export default FormToDoRow;
