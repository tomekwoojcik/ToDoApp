/* eslint-disable no-unused-vars */
import React from "react";

const FormToDoCartsElement = (arrayElement) => {
  const { id, title } = arrayElement;
  console.log(id);
  return (
    <li style={{ color: "red" }} key={id}>
      {title}
    </li>
  );
};

export default FormToDoCartsElement;
