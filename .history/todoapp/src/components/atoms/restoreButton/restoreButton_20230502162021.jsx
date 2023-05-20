import { Button } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { useContext } from "react";
import FormContext from "../../context/formToDoContext/formToDoContext";

const RestoreButton = (id) => {
  const {} = useContext(FormContext);
  return (
    <Button
      style={{
        backgroundColor: "#2e7d32",
        width: "100%",
        height: "23px",
        color: "white",
        fontSize: "10px",
        marginLeft: "5px",
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
};

export default RestoreButton;
