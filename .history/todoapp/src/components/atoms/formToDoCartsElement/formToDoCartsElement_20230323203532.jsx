/* eslint-disable no-unused-vars */
import React from "react";

const FormToDoCartsElement = (props) => {
  const [title, id] = props;
  return <li key={props.id}>{props.title}</li>;
};

export default FormToDoCartsElement;
