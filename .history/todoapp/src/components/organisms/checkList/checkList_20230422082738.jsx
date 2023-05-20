import { useContext } from "react";
import FormContext from "../../context/formToDoContext/formToDoContext";

const CheckList = () => {
  const { itemsLocalStorageIs, checkToDoElementsData } =
    useContext(FormContext);
  return (
    <ul className="formToDo__Carts">
      {!itemsLocalStorageIs ? null : checkToDoElementsData.map(e => console.log( e );};
    </ul>
  );
};

export default CheckList;
