import DeleteButton from "../../atoms/deleteButton/DeleteButton";
import RestoreButton from "../../atoms/restoreButton/restoreButton";

const RowButtonCheck = (title) => {
  return (
    <div className="formToDo__RowButtonCheck">
      <DeleteButton title={title} />
      <RestoreButton title={title} />
    </div>
  );
};

export default RowButtonCheck;
