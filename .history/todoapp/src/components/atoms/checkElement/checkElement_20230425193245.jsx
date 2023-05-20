import RestoreIcon from "@mui/icons-material/Restore";
import { Button } from "@mui/material";

const CheckElement = (e) => {
  const { id, title } = e;
  return (
    <li className="formToDo__CheckElement" key={id}>
      {title}
      <Button
        className="formToDo__ButtonCheckElement"
        variant="contained"
        key={id}
        color="success"
        endIcon={<RestoreIcon />}
        style={{
          fontSize: "10px",
        }}
      >
        Restore
      </Button>
    </li>
  );
};

export default CheckElement;
