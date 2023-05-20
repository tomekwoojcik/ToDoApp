/* eslint-disable no-unused-vars */
import React, { Button } from "react";

const FormToDoButton = (callback, variant, color, icon) => {
  return (
    <Button
      onClick={() => callback}
      className="rowButton"
      variant={variant}
      color={color}
      endIcon={icon}
    >
      Update
    </Button>
  );
};

export default FormToDoButton;
