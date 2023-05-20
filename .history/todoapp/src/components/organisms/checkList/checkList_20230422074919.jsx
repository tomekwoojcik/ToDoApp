import { useContext } from "react";
import FormContext from "../../context/formToDoContext/formToDoContext";

const CheckList = () => {
  const {} = useContext(FormContext);
  return (
    <ul className="formToDo__Carts">
      {!localStorageValueIs ? null : handleData.map((e) => {})}
    </ul>
  );
};

export default CheckList;
