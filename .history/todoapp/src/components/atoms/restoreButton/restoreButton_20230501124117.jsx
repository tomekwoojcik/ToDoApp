import { Button } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";

const RestoreButton = (fun) => (
  <Button onClick={() => fun()} endIcon={RestoreIcon} />
);

export default RestoreButton;
