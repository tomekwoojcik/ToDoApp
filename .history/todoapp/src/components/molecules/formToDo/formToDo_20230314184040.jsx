/* eslint-disable no-unused-vars */
import React from "react";
import FormToDoRow from "../../context/formToDoRow/formToDoRow";
import { FormProvider } from "../../context/formToDoContext/formToDoContext";
function FormToDo() {
  return (
    <form className="formToDo">
      <FormToDoRow />
    </form>
  );
}

export default FormToDo;
