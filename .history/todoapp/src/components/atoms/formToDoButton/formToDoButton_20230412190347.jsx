/* eslint-disable no-unused-vars */
import React from "react";

const FormToDoButton = () => {
  return (
    <Button
      onClick={(e) => buttonFunction(e, id)}
      className="rowButton"
      variant="contained"
      color="primary"
      endIcon={
        <UpgradeIcon className="buttonIcons" style={{ fontSize: "small" }} />
      }
    >
      Update
    </Button>
  );
};

export default FormToDoButton;
