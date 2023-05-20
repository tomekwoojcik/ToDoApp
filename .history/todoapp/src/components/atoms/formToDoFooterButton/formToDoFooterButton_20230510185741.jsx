/* eslint-disable prettier/prettier */
import { Button } from "@mui/material";


const FormToDoFooterButton = (el) => {
    // eslint-disable-next-line react/destructuring-assignment
    return (<Button style={{ backgroundColor: "#af2f2f26", width: "20px", height: "20px", borderRadius:"100%", padding:"0"}} className="formToDo__footerButton" variant="contained" key={el.el.key}>{el.el.icon}</Button>);
}
export default FormToDoFooterButton;
