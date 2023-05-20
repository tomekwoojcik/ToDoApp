/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import UpgradeIcon from "@mui/icons-material/Upgrade";

const FormToDoCartsElement = (arrayElement) => {
  const { id, isReady, title } = arrayElement;
  console.log(arrayElement);
  console.log(id);
  console.log(title);
  return (
    <li className="formToDo__CartsElement" key={id}>
      {/* {title} */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet
      unde ducimus facere porro explicabo quaerat tempora consequuntur corrupti,
      soluta enim consequatur doloremque dignissimos quo qui ut dolores vero
      aut!
      <div className="formToDo__RowButtons">
        <Button className="rowButton" variant="contained" color="primary" endIcon={<UpgradeIcon className="buttonIcons" style={{fontSize:"small"}}/>}>Update</Button>
        <Button className="rowButton" variant="contained" color="success" endIcon={<SendIcon className="buttonIcons" style={{fontSize:"small"}}/>}>Ready</Button>
        <Button className="rowButton" variant="contained" color="error" endIcon={<DeleteIcon className="buttonIcons" style={{fontSize:"small"}} />}>Delete</Button>
      </div>
    </li>
  );
};

export default FormToDoCartsElement;
