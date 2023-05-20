/* eslint-disable no-unused-vars */
import React from "react";

const FormToDoCartsElement = (props) => {
  const [title, id] = props;
  return <li key={id}>{title}</li>;
};

export default FormToDoCartsElement;
