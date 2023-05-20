import { Button } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";

const RestoreButton = (fun) => (
  <Button
    style={{ padding: "1px" }}
    className="formToDo__CheckButton"
    onClick={() => fun()}
    endIcon={<RestoreIcon style={{ backgroundColor: "white" }} />}
  />
);

export default RestoreButton;
