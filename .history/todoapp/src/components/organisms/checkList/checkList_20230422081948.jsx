import { useContext } from "react";
import FormContext from "../../context/formToDoContext/formToDoContext";

const CheckList = () => {
  const { itemsLocalStorageIs } = useContext(FormContext);
  return (
    <ul className="formToDo__Carts">
      {!itemsLocalStorageIs ? null : handleData.map((e) => {})}
    </ul>
  );
};

export default CheckList;
