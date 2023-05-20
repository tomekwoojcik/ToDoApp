/* eslint-disable prettier/prettier */
import CopyrightIcon from "@mui/icons-material/Copyright";
import { useContext } from "react";
import FormContext from "../../context/formToDoContext/formToDoContext";
import FormToDoFooterButton from "../../atoms/formToDoFooterButton/formToDoFooterButton";

const Footer = () => {
  const { iconArr } = useContext(FormContext);

  return (
    <div className="formToDo__footer">
      <p className="formToDo__rightParagraf">
        {" "}
        <CopyrightIcon /> all right reserved.
      </p>
          <div className="formToDo__iconDiv">{iconArr.map(el => <FormToDoFooterButton el={el}/>)}</div>
    </div>
  );
};

export default Footer;
