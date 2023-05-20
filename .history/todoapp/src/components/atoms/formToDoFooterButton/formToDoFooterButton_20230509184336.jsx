/* eslint-disable prettier/prettier */
import { Button } from "@mui/material";


const FormToDoFooterButton = (el) => {
    const { els, key } = el
    console.log();
    return (<Button className="formToDo__footerButton" variant="contained" key={key}>{els.icon}</Button>);
}
export default FormToDoFooterButton;
