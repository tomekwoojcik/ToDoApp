/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React, {useContext} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import FormContext from "../../context/formToDoContext/formToDoContext";
import FormToDoUpdateRow from "../../atoms/formToDoUpdateRow/formToDoUpdateRow";

const FormToDoCartsElement = (arrayElement) => {
  const { buttonFunction, update } = useContext(FormContext);
  const { id, isReady, title } = arrayElement.arrayElement
  const buttonArr = [{name:"Update", function: buttonFunction(id), variant: "contained", color:"primary"}]
  return (
    <li className="formToDo__CartsElement" key={id}>
      {!update ? title : FormToDoUpdateRow}
      <div className="formToDo__RowButtons">
        {/* <Button onClick={e => buttonFunction(id)} className="rowButton" variant="contained" color="primary" endIcon={<UpgradeIcon className="buttonIcon" style={{ fontSize: "small" }} />}>Update</Button>
        <Button className="rowButton" variant="contained" color="success" endIcon={<SendIcon className="buttonIcon" style={{fontSize:"small"}}/>}>Ready</Button>
        <Button className="rowButton" variant="contained" color="error" endIcon={<DeleteIcon className="buttonIcon" style={{fontSize:"small"}} />}>Delete</Button> */}
      </div>
    </li>
  );
};

export default FormToDoCartsElement;
