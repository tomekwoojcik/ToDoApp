/* eslint-disable no-unused-vars */
import React from "react";

const FormToDoCartsElement = (arrayElement) => {
  const { id, isReady, title } = arrayElement;
  console.log(arrayElement);
  console.log(this.prop);
  console.log(title);
  return (
    <li style={{ color: "red" }} key={id}>
      {title}
    </li>
  );
};

export default FormToDoCartsElement;
