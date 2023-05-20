/* eslint-disable no-unused-vars */
import React from "react";
import FormToDoRow from "../../atoms/formToDoRow/formToDoRow";
import FormToDoCarts from "../../molecules/formToDoCarts/formToDoCarts";
import CheckList from "../checkList/checkList";

function FormToDo() {
  return (
    <form className="formToDo">
      <FormToDoRow />
      <FormToDoCarts />
      <CheckList />
    </form>
  );
}

export default FormToDo;
