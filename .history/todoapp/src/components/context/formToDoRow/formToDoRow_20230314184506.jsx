/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormContext from "../formToDoContext/formToDoContext";
function FormToDoRow() {
  const{getValueForm} = useContext(FormContext)
  return (
    <div className="formToDo__Row">
      <KeyboardArrowDownIcon
        style={{
          height: "40px",
          width: "40px",
          fontWeight: "bold",
          color: "#e6e6e6",
          padding: "5px 10px",
        }}
      />
      <input onChange={}
        className="formToDo__Input"
        type="text"
        placeholder="What needs to be done?"
        id="input"
      />
    </div>
  );
}

export default FormToDoRow;
