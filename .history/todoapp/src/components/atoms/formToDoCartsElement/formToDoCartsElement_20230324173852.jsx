/* eslint-disable no-unused-vars */
import React from "react";

const FormToDoCartsElement = (arrayElement) => {
  const [id, title] = arrayElement;
  return <li key={id}>{title}</li>;
};

export default FormToDoCartsElement;
