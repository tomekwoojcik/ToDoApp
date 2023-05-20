/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React, {useContext} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import FormContext from "../../context/formToDoContext/formToDoContext";

const FormToDoCartsElement = (arrayElement) => {
  const { buttonFunction, update } = useContext(FormContext);
  const {id, isReady, title} = arrayElement.arrayElement
  return (
    <li className="formToDo__CartsElement" key={id}>
      {!update ? title : <div className="formToDo__UpdateRow"><input className="updateInput" type="text"/><div><CancelIcon className="cancelButton" /> <CheckIcon className="checkButton"/></div></div>}
      <div className="formToDo__RowButtons">
        <Button onClick={e => buttonFunction(e, id)} className="rowButton" variant="contained" color="primary" endIcon={<UpgradeIcon className="buttonIcons" style={{fontSize:"small"}}/>}>Update</Button>
        <Button className="rowButton" variant="contained" color="success" endIcon={<SendIcon className="buttonIcons" style={{fontSize:"small"}}/>}>Ready</Button>
        <Button className="rowButton" variant="contained" color="error" endIcon={<DeleteIcon className="buttonIcons" style={{fontSize:"small"}} />}>Delete</Button>
      </div>
    </li>
  );
};

export default FormToDoCartsElement;
