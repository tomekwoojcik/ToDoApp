import DeleteButton from "../../atoms/deleteButton/deleteButton";
import RestoreButton from "../../atoms/restoreButton/restoreButton";

const RowButtonCheck = (deleteFun, restoreFun) => {
  return (
    <div className="formToDoC">
      <DeleteButton fun={deleteFun} />
      <RestoreButton fun={restoreFun} />
    </div>
  );
};

export default RowButtonCheck;
