/* eslint-disable prettier/prettier */
import { Button } from "@mui/material";


const FormToDoFooterButton = el => {
    const { el, key } = el
    return (<Button className="formToDo__footerButton" variant="contained" key={key}>{el}</Button>);
}
export default FormToDoFooterButton;
