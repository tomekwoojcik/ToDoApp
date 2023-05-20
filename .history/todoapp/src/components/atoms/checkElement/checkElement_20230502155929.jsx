import { createContext } from "react";
import RowButtonCheck from "../../molecules/rowButtonCheck/rowButtonCheck";

const CheckElement = (e) => {
    const { id, title } = e;
    const {} = createContext(FormContext)
  return (
    <li className="formToDo__CheckElement" key={id}>
      <p className="formToDo__CheckElementTitle">{title}</p>
      <RowButtonCheck />
    </li>
  );
};

export default CheckElement;
