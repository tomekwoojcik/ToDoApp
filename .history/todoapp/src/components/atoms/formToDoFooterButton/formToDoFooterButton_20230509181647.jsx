/* eslint-disable prettier/prettier */
import { Button } from "@mui/material";


const FormToDoFooterButton = (el, keys) =>
    <Button className="formToDo__footerButton" variant="contained" key={keys}>{el}</Button>;

export default FormToDoFooterButton;
