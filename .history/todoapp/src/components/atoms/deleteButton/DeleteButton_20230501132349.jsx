import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = (fun) => (
  <Button
    className="formToDo__CheckButton"
    color="error"
    onClick={() => fun()}
    endIcon={<DeleteIcon />}
  />
);

export default DeleteButton;
