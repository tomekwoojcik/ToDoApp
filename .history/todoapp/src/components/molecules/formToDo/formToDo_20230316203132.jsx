/* eslint-disable no-unused-vars */
import React from "react";
import { FormToDoRow } from "../../atoms/formToDoRow/formToDoRow";
import FormContext from "../../context/formToDoContext/formToDoContext";

function FormToDo() {
  const { saveToDo } = useContext(FormContext);

  return (
    <form
      onKeyDown={(e) => {
        saveToDo(e);
      }}
      className="formToDo"
    >
      <FormToDoRow />
    </form>
  );
}

export default FormToDo;
