/* eslint-disable prettier/prettier */
import { useContext } from "react";
import FormContext from "../../context/formToDoContext/formToDoContext";
// import FormToDoButton from "../formToDoButton/formToDoButton";

const CheckElement = (e) => {
  const { buttonCheckArr } = useContext(FormContext);
  const { id, title } = e;
  return (
    <li className="formToDo__CheckElement" key={id}>
      <p className="formToDo__CheckElementTitle">{title}</p>
      {buttonCheckArr.map(el => {
          console.log(el);
      })}
    </li>
  );
};

export default CheckElement;
