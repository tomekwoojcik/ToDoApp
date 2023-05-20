/* eslint-disable prettier/prettier */
import { Button } from "@mui/material";


const FormToDoFooterButton = (el) => {
    // eslint-disable-next-line react/destructuring-assignment
    return (<Button style={{backgroundColor:""}} className="formToDo__footerButton" variant="contained" key={el.el.key}>{el.el.icon}</Button>);
}
export default FormToDoFooterButton;
