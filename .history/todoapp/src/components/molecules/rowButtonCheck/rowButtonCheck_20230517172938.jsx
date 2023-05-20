import DeleteButton from "../../atoms/deleteButton/DeleteButton";
import RestoreButton from "../../atoms/restoreButton/restoreButton";

const RowButtonCheck = (title) => {
  return (
    <div className="formToDo__RowButtonCheck">
      <DeleteButton className="button" title={title} />
      <RestoreButton className="button" title={title} />
    </div>
  );
};

export default RowButtonCheck;
