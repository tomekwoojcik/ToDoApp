import { Button } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";

const RestoreButton = (fun) => (
  <Button
    style={{ padding: "1px" }}
    className="formToDo__CheckButton formToDo__RestoreButton"
    onClick={() => fun()}
    endIcon={<RestoreIcon style={{ color: "white" }} />}
  />
);

export default RestoreButton;
