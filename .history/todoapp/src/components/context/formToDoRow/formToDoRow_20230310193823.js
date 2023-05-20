import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FormToDoRow = () => (
  <div className="formToDo__Row">
    <KeyboardArrowDownIcon
      className="formToDo__Arrow"
      style={{
        height: '40px',
        width: '40px',
        fontWeight: 'bold',
        clearl

      }}
    />
    <input className="formToDo__Input" type="text" placeholder="What needs to be done?" id="input" />
  </div>
);

export default FormToDoRow;
