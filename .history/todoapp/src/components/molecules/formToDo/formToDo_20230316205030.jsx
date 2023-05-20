/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FormToDoRow } from "../../atoms/formToDoRow/formToDoRow";

function FormToDo() {
  return (
    <form className="formToDo">
      <FormToDoRow />
    </form>
  );
}

export default FormToDo;
