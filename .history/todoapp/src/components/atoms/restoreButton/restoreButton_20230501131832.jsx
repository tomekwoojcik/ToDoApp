import { Button } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";

const RestoreButton = (fun) => (
  <Button
    className="formToDo__RestoreButton"
    color="primary"
    onClick={() => fun()}
    endIcon={<RestoreIcon />}
  />
);

export default RestoreButton;
