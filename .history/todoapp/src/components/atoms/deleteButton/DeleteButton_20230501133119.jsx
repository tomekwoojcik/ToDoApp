import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = (fun) => (
  <Button
    style={{ padding: "1px" }}
    className="formToDo__CheckButton"
    onClick={() => fun()}
    endIcon={<DeleteIcon style={{ backgroundColor: "white" }} />}
  />
);

export default DeleteButton;
