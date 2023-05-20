import { useContext } from "react";
import FormContext from "../../context/formToDoContext/formToDoContext";

const CheckList = () => {
  const {checkLocalStorage} = useContext(FormContext);
  return (
    <ul on className="formToDo__Carts">
      {! ? null : handleData.map((e) => {})}
    </ul>
  );
};

export default CheckList;
