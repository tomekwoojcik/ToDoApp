/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React, {useContext} from "react";
import FormContext from "../../context/formToDoContext/formToDoContext";
import FormToDoUpdateRow from "../../atoms/formToDoUpdateRow/formToDoUpdateRow";

function FormToDoCartsElement(arrayElement){
  const { buttonFunction, update, buttonArr } = useContext(FormContext);
  const { id, isReady, title } = arrayElement.arrayElement
  return (
    <li className="formToDo__CartsElement" key={id}>
      {!update ? title : <FormToDoUpdateRow/>}
      <div className="formToDo__RowButtons">
        {buttonArr.map((el) => { return (<Button key={el.name} onClick={e => buttonFunction(e, id)} className="rowButton" variant={el.variant} color={el.color} endIcon={el.icon}>{el.name}</Button>)})}
      </div>
    </li>
  );
};

export default FormToDoCartsElement;
