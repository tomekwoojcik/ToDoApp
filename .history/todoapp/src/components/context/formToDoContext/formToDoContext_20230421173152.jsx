/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import UpgradeIcon from "@mui/icons-material/Upgrade";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [getValue, setGetValue] = useState([]);
  const [localStorageValueIs, setLocalStorageValueIs] = useState(false);
  const [buttonName, setButtonName] = useState();
  const [handleData, setHandleData] = useState([]);
  const [localStorageData, setlocalStorageData] = useState([]);
  const [update, setUpdate] = useState(false);

  const onChangeInput = (e) => {
    e.preventDefault();
    setGetValue(e.target.value);
  };

  const sentData = (e) => {
    e.preventDefault();

    if (localStorage.getItem("toDoElements") === null) {
      const newArr = [];
      localStorage.setItem("toDoElements", JSON.stringify(newArr));
    }

    const toDoCart = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      isReady: false,
      title: getValue,
    };
    const localStorageCopy = JSON.parse(localStorage.getItem("toDoElements"));
    localStorageCopy.push(toDoCart);
    localStorage.setItem("toDoElements", JSON.stringify(localStorageCopy));
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sentData(e);
    }
  };

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem("toDoElements"));
    if (value === null) {
      setLocalStorageValueIs(false);
    } else {
      setLocalStorageValueIs(true);
    }
  }, []);

  const getData = () => {
    const data = JSON.parse(localStorage.getItem("toDoElements"));
    setHandleData(data);
    setlocalStorageData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const updateFunction = (e, id) => {
    setUpdate(true);
    const updateData = handleData.filter((el) => {
      return el.id === id;
    });
    setHandleData(updateData);
  };

  const buttonFunction = (e, id) => {
    setButtonName(e.target.outerText);
    switch (buttonName) {
      case "UPDATE":
        updateFunction(e, id);
        break;

      default:
        break;
    }
  };
  const buttonArr = [
    {
      name: "Update",
      variant: "contained",
      color: "primary",
      icon: (
        <UpgradeIcon className="buttonIcon" style={{ fontSize: "small" }} />
      ),
    },
    {
      name: "Send",
      variant: "contained",
      color: "success",
      icon: <SendIcon className="buttonIcon" style={{ fontSize: "small" }} />,
    },
    {
      name: "Delete",
      variant: "contained",
      color: "error",
      icon: <DeleteIcon className="buttonIcon" style={{ fontSize: "small" }} />,
    },
  ];

  const handleUpdate = () => {
    const [getData] = handleData;
    getData.title = getValue;
    localStorage.setItem("toDoElements", JSON.stringify(localStorageData));


    // console.log(localStorageData);
  };
  return (
    <FormContext.Provider
      value={{
        onChangeInput,
        handleKeyPress,
        localStorageValueIs,
        handleData,
        buttonFunction,
        update,
        buttonArr,
        handleUpdate,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormContext;
