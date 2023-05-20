import { useContext } from "react";
import RowButtonCheck from "../../molecules/rowButtonCheck/rowButtonCheck";
import FormContext from "../../context/formToDoContext/formToDoContext";

const CheckElement = (e) => {
  const { id, title } = e;
  const {restoreFun, deleteCheckToDoElementFun} = useContext(FormContext);
  return (
    <li className="formToDo__CheckElement" key={id}>
      <p className="formToDo__CheckElementTitle">{title}</p>
          <RowButtonCheck deleteCheckToDoElementFun} {restoreFun} />
    </li>
  );
};

export default CheckElement;
