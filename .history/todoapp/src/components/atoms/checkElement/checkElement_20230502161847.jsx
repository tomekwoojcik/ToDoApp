import RowButtonCheck from "../../molecules/rowButtonCheck/rowButtonCheck";

const CheckElement = (e) => {
  const { id, title } = e;
  return (
    <li className="formToDo__CheckElement" key={id}>
      <p className="formToDo__CheckElementTitle">{title}</p>
      <RowButtonCheck id={id} />
    </li>
  );
};

export default CheckElement;
