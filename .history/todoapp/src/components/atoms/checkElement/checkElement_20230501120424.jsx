import { useContext } from "react";
import { FormToDoRow } from "../formToDoRow/formToDoRow";
import FormContext from "../../context/formToDoContext/formToDoContext";

const CheckElement = (e) => {
  const { buttonCheckArr } = useContext(FormContext);
  const { id, title } = e;
  return (
    <li className="formToDo__CheckElement" key={id}>
          <p className="formToDo__CheckElementTitle">{title}</p>
          {buttonCheckArr.map((el) => {
              console.log(el);
              < FormToDoRow />
          })}
    </li>
  );
};

export default CheckElement;
