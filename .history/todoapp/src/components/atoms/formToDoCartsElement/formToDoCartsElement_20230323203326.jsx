/* eslint-disable no-unused-vars */
import React from "react";

const FormToDoCartsElement = (...{ title, id }) => {
  console.log(title);
  return <li key={id}>{title}</li>;
};

export default FormToDoCartsElement;
