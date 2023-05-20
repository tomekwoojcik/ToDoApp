import RestoreIcon from "@mui/icons-material/Restore";
import { Button } from "@mui/material";

const CheckElement = (e) => {
  const { id, title } = e;
  return (
    <li className="formToDo__CheckElement" key={id}>
      {title}
      <Button endIcon={RestoreIcon}>Restore</Button>
    </li>
  );
};

export default CheckElement;
