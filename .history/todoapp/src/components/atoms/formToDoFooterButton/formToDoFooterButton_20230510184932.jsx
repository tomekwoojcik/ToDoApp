/* eslint-disable prettier/prettier */
import { Button } from "@mui/material";


const FormToDoFooterButton = (el) => {
    const [els, id] = el;
    console.log(els)
    console.log(id);
    // const { els, key } = el
    // console.log(els);
    // console.log(key);
    console.log();
    // eslint-disable-next-line react/destructuring-assignment
    return (<Button className="formToDo__footerButton" variant="contained" key={el.el.key}>{el.el.icon}</Button>);
}
export default FormToDoFooterButton;
