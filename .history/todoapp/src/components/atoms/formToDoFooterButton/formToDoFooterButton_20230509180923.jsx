/* eslint-disable prettier/prettier */
import { Button } from "@mui/material";


const FormToDoFooterButton = (el, length) =>
    <Button className="formToDo__footerButton" variant="contained" key={length}>{el}</Button>;

export default FormToDoFooterButton;
