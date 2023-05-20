/* eslint-disable prettier/prettier */
import { useContext } from "react";
import FormContext from "../../context/formToDoContext/formToDoContext";
import CheckElement from "../../atoms/checkElement/checkElement";

const CheckList = () => {
  const { itemsLocalStorageIs, checkToDoElementsData } =
    useContext(FormContext);
  return (
    {!itemsLocalStorageIs
      ? null
      : <ul className="formToDo__CheckList">
checkToDoElementsData.map(e => CheckElement(e))
      </ul>
}
  );
};

export default CheckList;
