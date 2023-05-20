import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FormToDoRow = () => (
  <div className="formToDo__Row">
    <KeyboardArrowDownIcon
      className="formToDo__Arrow"
      style={{
        height: '10px',
      }}
    />
    <input className="formToDo__Input" type="text" placeholder="What needs to be done?" id="input" />
  </div>
);

export default FormToDoRow;
