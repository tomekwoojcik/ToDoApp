/* eslint-disable no-unused-vars */
import React from "react";

const FormToDoCartsElement = (arrayElement) => {
  const { id, isReady, title } = arrayElement;
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
    </li>
  );
};

export default FormToDoCartsElement;
