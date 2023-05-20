/* eslint-disable no-unused-vars */
import React, { Button } from "react";

const FormToDoButton = (callback, icon) => {
  return (
    <Button
      onClick={(e) => callback}
      className="rowButton"
      variant="contained"
      color="primary"
      endIcon={icon}
    >
      Update
    </Button>
  );
};

export default FormToDoButton;
