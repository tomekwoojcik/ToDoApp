import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = (fun) => (
  <Button
    style={{ padding: "1px" }}
    className="formToDo__CheckButton formToDo__DeleteButton"
    onClick={() => fun()}
    endIcon={<DeleteIcon style={{ color: "white" }} />}
  />
);

export default DeleteButton;
