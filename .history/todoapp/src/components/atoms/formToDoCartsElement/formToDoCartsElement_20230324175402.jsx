/* eslint-disable no-unused-vars */
import React from "react";

const FormToDoCartsElement = (arrayElement) => {
  const { el } = arrayElement;
  console.log(arrayElement);
  console.log(el.id);
  console.log(el.title);
  return (
    <li style={{ color: "red" }} key={id}>
      {title}
    </li>
  );
};

export default FormToDoCartsElement;
