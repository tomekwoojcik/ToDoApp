/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [getValue, setGetValue] = useState();
  const [localStorageValueIs, setLocalStorageValueIs] = useState(false);
  const [buttonName, setButtonName] = useState();
  const [handleData, setHandleData] = useState();
  const [localStorageData, setLocalStorageData] = useState();
  const [update, setUpdate] = useState(false);
  const [itemsLocalStorageIs, setItemsLocalStorageIs] = useState(false);
  const [checkToDoElementsData, setCheckToDoElementsData] = useState();

  const getData = localStorageName => JSON.parse(localStorage.getItem(`${localStorageName}`));
  const sentValue = (localStorageName, value) => localStorage.setItem(`${localStorageName}`, JSON.stringify(value));
  const onChangeInput = e => setGetValue(e.target.value);
  const checkStorage = (name, value) => {
    if (getData(name) === null) {
      sentValue(name, value);
    }}

  const sentData = () => {
    checkStorage("toDoElements", []);

    const toDoCart = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      isReady: false,
      title: getValue,
    };
    const localStorageCopy = getData("toDoElements");
    localStorageCopy.push(toDoCart);
    sentValue("toDoElements", localStorageCopy);
    setLocalStorageData(localStorageCopy);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      sentData();
    }
  };

  useEffect(() => {
    if (getData("toDoElements") === null) {
      setLocalStorageValueIs(false);
    } else {
      setLocalStorageValueIs(true);
    }
  }, []);

  const toDoItems = localStorageName => {
    setHandleData(getData(localStorageName));
    setLocalStorageData(getData(localStorageName));
  }

  const updateFunction = id => {
    setUpdate(true);
    setHandleData(handleData.filter(el => el.id === id));
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
      name: "READY",
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
  const deleteData = (id, localStorageName) => {
    const data = handleData.filter(el => el.id !== id);
    sentValue(localStorageName, data);
    setHandleData(data);
  }

  const handleUpdate = () => {
    const [data] = handleData;
    data.title = getValue;
    const newData = getData("toDoElements").filter(el => el.id === data.id);
    newData.push(data);
    sentValue("toDoElements", newData);
    setHandleData(newData);
    setUpdate(false);
    deleteData(newData.id, "toDoElements");
  };

  const cancelUpdate = () => {
    setUpdate(false);
    setHandleData(localStorageData);
  }

  const checkLocalStorage = name =>{
    const itemsLocalStorage = getData(name);
    if (itemsLocalStorage.length !== 0) {
      setItemsLocalStorageIs(true);
      setCheckToDoElementsData(itemsLocalStorage);
    };
  }

  useEffect(() => {
    toDoItems("toDoElements");
    checkLocalStorage("checkToDoElements");
    /* eslint-disable-next-line */
  }, []);

  const handleReady = (e, id, name) => {
    deleteData(id, "toDoElements");
    const [data] = handleData.filter(el => el.id === id);
    const itemsLocalStorage = getData(name);
    itemsLocalStorage.push(data);
    sentValue(name, itemsLocalStorage);
    setCheckToDoElementsData(itemsLocalStorage);
  }

  const buttonFunction = (e, id) => {
    setButtonName(e.target.outerText);
    switch (buttonName) {
      case "UPDATE":
        updateFunction(id);
        break;
      
      case "READY":
        handleReady(e, id, "checkToDoElements");
        break;
      
      case "DELETE":
        deleteData(id, "toDoElements");
        break;
      
      
      default:
        break;
    }
  };
  const deleteCheckToDoElementFun = id => {
    const filterValue = checkToDoElementsData.filter(el => el.id !== id.title.id);
    sentValue("checkToDoElements", filterValue);
    setCheckToDoElementsData(filterValue);
  }

  const restoreFun = id => {
    deleteCheckToDoElementFun(id);
    const filterValue = checkToDoElementsData.filter(el => el.id === id.title.id);
    const data = getData("toDoElements");
    if (data !== null) {
      data.push(...filterValue);  
      sentValue("toDoElements", data);
    } 
    setHandleData(data);
  }

  const iconArr = [
    <InstagramIcon style={{ width: "10px", height: "10px" }} /></Button>,
    <Button className="formToDo__footerButton" variant="contained" key={2}><FacebookIcon style={{ width: "10px", height: "10px" }} /></Button>,
    <Button className="formToDo__footerButton" variant="contained" key={3}><LinkedInIcon style={{ width: "10px", height: "10px" }} /></Button>,
    <Button className="formToDo__footerButton" variant="contained" key={4}><TwitterIcon style={{ width: "10px", height: "10px" }} /></Button>
  ];

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
        cancelUpdate,
        checkLocalStorage,
        itemsLocalStorageIs,
        checkToDoElementsData,
        restoreFun,
        deleteCheckToDoElementFun,
        iconArr,
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
