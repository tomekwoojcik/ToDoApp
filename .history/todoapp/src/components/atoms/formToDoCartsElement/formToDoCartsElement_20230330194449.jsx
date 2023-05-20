/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { Button } from "@mui/material";
import React, {useContext} from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import FormContext from "../../context/formToDoContext/formToDoContext";

const FormToDoCartsElement = ({ arrayElement }) => {
  const {id, isReady, title } = arrayElement;
  const {buttonFunction} = useContext(FormContext)
  console.log(arrayElement);
  return (
    <li className="formToDo__CartsElement" key={id}>
      {/* {title} */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet
      unde ducimus facere porro explicabo quaerat tempora consequuntur corrupti,
      soluta enim consequatur doloremque dignissimos quo qui ut dolores vero
      aut!
      <div className="formToDo__RowButtons">
        <Button onClick={e => buttonFunction(e.target.outerText, id)} className="rowButton" variant="contained" color="primary" endIcon={<UpgradeIcon className="buttonIcons" style={{fontSize:"small"}}/>}>Update</Button>
        <Button className="rowButton" variant="contained" color="success" endIcon={<SendIcon className="buttonIcons" style={{fontSize:"small"}}/>}>Ready</Button>
        <Button className="rowButton" variant="contained" color="error" endIcon={<DeleteIcon className="buttonIcons" style={{fontSize:"small"}} />}>Delete</Button>
      </div>
    </li>
  );
};

export default FormToDoCartsElement;
