import {FormToDoRow from "../formToDoRow/formToDoRow";

const CheckElement = (e) => {
  const { id, title } = e;
  return (
    <li className="formToDo__CheckElement" key={id}>
      <p className="formToDo__CheckElementTitle">{title}</p>
      <FormToDoRow />
    </li>
  );
};

export default CheckElement;
