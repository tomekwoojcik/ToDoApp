import RestoreIcon from "@mui/icons-material/Restore";
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";

const CheckElement = (e) => {
  const { id, title } = e;
  return (
    <li className="formToDo__CheckElement" key={id}>
      <p className="formToDo__CheckElementTitle">{title}</p>
      <Button
        className="formToDo__ButtonCheckElement"
        variant="contained"
        key={id}
        color="success"
        endIcon={
          <RestoreIcon style={{ marginRight: "2.5px", fontSize: "15px" }} />
        }
        style={{
          fontSize: "10px",
          padding: "2.5px",
        }}
      >
        Restore
      </Button>
      <Button
        className="formToDo__ButtonCheckElement"
        variant="contained"
        key={id}
        color="error"
        endIcon={
          <DeleteIcon style={{ marginRight: "2.5px", fontSize: "15px" }} />
        }
        style={{
          fontSize: "10px",
          padding: "2.5px",
        }}
      >
        Delete
      </Button>
    </li>
  );
};

export default CheckElement;
