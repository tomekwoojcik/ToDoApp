/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import FormContext from "../../context/formToDoContext/formToDoContext";
import FormToDoCartsElement from "../formToDoCartsElement/formToDoCartsElement";

function FormToDoCarts() {
  const { handleData, localStorageValueIs } = useContext(FormContext);
  return (
    <ul className="formToDo__Carts">
      { !localStorageValueIs ? null: handleData.map(e => {
        return <FormToDoCartsElement key={e.id} arrayElement={e} />;
      })}
    </ul>
  );
}

export default FormToDoCarts;
