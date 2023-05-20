/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormContext from "../../context/formToDoContext/formToDoContext";

export function FormToDoRow() {
  const { onChangeInput, handleKeyPress, localStorageValueIs} = useContext(FormContext);
  return (
    <div className="formToDo__Row">
      {!localStorageValueIs ?
        <KeyboardArrowDownIcon
        style={{
          height: "40px",
          width: "40px",
          fontWeight: "bold",
          color: "#fff",
          padding: "5px 10px",
        }}
      /> : <KeyboardArrowDownIcon
        style={{
          height: "40px",
          width: "40px",
          fontWeight: "bold",
            color: "#e6e6e6",
          padding: "5px 10px",
        }}
      />}
      <input
      onKeyDown={e => handleKeyPress(e)}
        onChange={e => onChangeInput(e)}
        name="formValue"
        className="formToDo__Input"
        type="text"
        placeholder="What needs to be done?"
        id="input"
      />
    </div>
  );
}

export default FormToDoRow;
