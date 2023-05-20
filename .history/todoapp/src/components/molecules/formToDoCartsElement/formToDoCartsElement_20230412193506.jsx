/* eslint-disable no-undef */
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
  const buttonArr = [
    { name: "Update", variant: "contained", color: "primary", icon: <UpgradeIcon className="buttonIcon" style={{ fontSize: "small" }} /> },
    { name: "Send", variant: "contained", color: "success", icon: <SendIcon className="buttonIcon" style={{fontSize:"small"}}/> },
    { name: "Delete", variant: "contained", color: "error", icon: <DeleteIcon className="buttonIcon" style={{fontSize:"small"}} /> }]
  return (
    <li className="formToDo__CartsElement" key={id}>
      {!update ? title : FormToDoUpdateRow}
      <div className="formToDo__RowButtons">
        {buttonArr.map((el) => { return (<Button key={el.name} onClick={e => buttonFunction(e, id)} className="rowButton" variant={el.variant} color={el.color} endIcon={el.icon}>{el.name}</Button>)})}
        {/* <Button onClick={e => buttonFunction(id)} className="rowButton" variant="contained" color="primary" endIcon={<UpgradeIcon className="buttonIcon" style={{ fontSize: "small" }} />}>Update</Button>
        <Button className="rowButton" variant="contained" color="success" endIcon={<SendIcon className="buttonIcon" style={{fontSize:"small"}}/>}>Ready</Button>
        <Button className="rowButton" variant="contained" color="error" endIcon={<DeleteIcon className="buttonIcon" style={{fontSize:"small"}} />}>Delete</Button> */}
      </div>
    </li>
  );
};

export default FormToDoCartsElement;
