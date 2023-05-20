import { Button } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";

const RestoreButton = (fun) => (
  <Button
    style={{ padding: "1px" }}
    className="formToDo__CheckButton"
    color="primary"
    onClick={() => fun()}
    endIcon={<RestoreIcon />}
  />
);

export default RestoreButton;
