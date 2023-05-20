/* eslint-disable prettier/prettier */
import { Button } from "@mui/material";


const FormToDoFooterButton = (el) => {
    console.log(el)
    // eslint-disable-next-line react/destructuring-assignment
    return (<Button className="formToDo__footerButton" variant="contained" key={el.el.key}>{el.el.icon}</Button>);
}
export default FormToDoFooterButton;
