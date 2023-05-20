/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React from "react";

const FormToDoCartsElement = (arrayElement) => {
  const { id, isReady, title } = arrayElement;
  const buttonArr = ["delete", "update", "ready"];
  console.log(arrayElement);
  console.log(id);
  console.log(title);
  return (
    <li className="formToDo__CartsElement" key={id}>
      {/* {title} */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet
      unde ducimus facere porro explicabo quaerat tempora consequuntur corrupti,
      soluta enim consequatur doloremque dignissimos quo qui ut dolores vero
      aut!
      <div className="formToDo__RowButtons">
        {buttonArr.map(el => <button className="rowButton" type="button" key={el}>{el}</button>)}
      </div>
    </li>
  );
};

export default FormToDoCartsElement;
