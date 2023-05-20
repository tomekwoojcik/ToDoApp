import { Button } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";

const RestoreButton = (fun) => (
  <Button
    style={{
      padding: "2px",
      backgroundColor: "#d32f2f",
      width: "18px",
      height: "23px",
      color: "white",
      fontSize: "10px",
    }}
    className="formToDo__CheckButton formToDo__RestoreButton"
    onClick={() => fun()}
    endIcon={
      <RestoreIcon
        style={{ color: "white", fontSize: "15px", paddingRight: "3px" }}
      />
    }
  >
    RESTORE
  </Button>
);

export default RestoreButton;
