/* eslint-disable no-unused-vars */
import React from "react";

const FormToDoCartsElement = ({ id, isReady, title }) => {
  console.log(id);
  console.log(title);
  return (
    <li style={{ color: "red" }} key={id}>
      {title}
    </li>
  );
};

export default FormToDoCartsElement;
