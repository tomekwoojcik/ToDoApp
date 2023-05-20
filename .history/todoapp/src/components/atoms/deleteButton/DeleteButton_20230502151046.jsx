import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = (fun) => (
  <Button
    style={{
      padding: "2px",
      backgroundColor: "#d32f2f",
      width: "18px",
      height: "23px",
      color: "white",
      fontSize: "10px",
    }}
    className="formToDo__CheckButton formToDo__DeleteButton"
    onClick={() => fun()}
    endIcon={<DeleteIcon style={{ color: "white", fontSize: "15px" }} />}
  >
    DELETE
  </Button>
);

export default DeleteButton;
