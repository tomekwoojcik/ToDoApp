import DeleteButton from "../../atoms/deleteButton/deleteButton";
import RestoreButton from "../../atoms/restoreButton/restoreButton";

const RowButtonCheck = (title) => {
  console.log(title);
  return (
    <div className="formToDo__RowButtonCheck">
      <DeleteButton />
      <RestoreButton />
    </div>
  );
};

export default RowButtonCheck;
