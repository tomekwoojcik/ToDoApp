import { useContext } from "react";
import { FormToDoRow } from "../formToDoRow/formToDoRow";
import FormContext from "../../context/formToDoContext/formToDoContext";

const CheckElement = (e) => {
    const{ }= useContext(FormContext)
  const { id, title } = e;
  return (
    <li className="formToDo__CheckElement" key={id}>
      <p className="formToDo__CheckElementTitle">{title}</p>
      <FormToDoRow />
    </li>
  );
};

export default CheckElement;
