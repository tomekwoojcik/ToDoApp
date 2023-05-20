/* eslint-disable no-unused-vars */
import React from "react";
import { FormToDoRow } from "../../atoms/formToDoRow/formToDoRow";
import FormContext from "../../context/formToDoContext/formToDoContext";

function FormToDo() {
    const { onChangeInput } = useContext(FormContext);

  return (
    <form onKeyDown={} className="formToDo">
      <FormToDoRow />
    </form>
  );
}

export default FormToDo;
