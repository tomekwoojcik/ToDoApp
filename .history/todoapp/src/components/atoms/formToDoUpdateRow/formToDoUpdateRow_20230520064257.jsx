/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import FormContext from "../../context/formToDoContext/formToDoContext";

const FormToDoUpdateRow = () => {
  const { onChangeInput, handleUpdate, cancelUpdate } = useContext(FormContext);
  return (
    <div className="formToDo__UpdateCard">
      <input
        className="updateInput"
        type="text"
        onChange={e => {
          onChangeInput(e);
        }}
      />
      <div className="buttonsRow">
        <CancelIcon
          className="cancelButton buttonUpdate"
          onClick={() => cancelUpdate()}
        />{" "}
        <CheckIcon
          className="checkButton buttonUpdate"
          onClick={e => handleUpdate(e)}
        />
      </div>
    </div>
  );
}
export default FormToDoUpdateRow;
