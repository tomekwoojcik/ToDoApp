/* eslint-disable prettier/prettier */
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
  const [localStorageData, setLocalStorageData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [itemsLocalStorageIs, setItemsLocalStorageIs] = useState(false);
  const [checkToDoElementsData, setCheckToDoElementsData] = useState();

  const getData = localStorageName => JSON.parse(localStorage.getItem(`${localStorageName}`));
  const sentValue = (localStorageName, value) => localStorage.setItem(`${localStorageName}`, JSON.stringify(value));
  const onChangeInput = e => setGetValue(e.target.value);

  const sentData = () => {
    if ( getData("toDoElements") === null) {
      const newArr = [];
      sentValue("toDoElements", newArr);
    }

    const toDoCart = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      isReady: false,
      title: getValue,
    };
    const localStorageCopy = getData("toDoElements");
    localStorageCopy.push(toDoCart);
    sentValue("toDoElements", localStorageCopy);
    localStorageData(localStorageCopy);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      sentData();
    }
  };

  useEffect(() => {
    // const data = getData("toDoElements");
    if (getData("toDoElements") === null) {
      setLocalStorageValueIs(false);
    } else {
      setLocalStorageValueIs(true);
    }
  }, []);


  const toDoItems = localStorageName => {
    // const data = getData(localStorageName);
    setHandleData(getData(localStorageName));
    setLocalStorageData(getData(localStorageName));
  }

  const updateFunction = (e, id) => {
    setUpdate(true);
    const updateData = handleData.filter(el => {
      return el.id === id;
    });
    setHandleData(updateData);
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

  const saveModifyData = data => {
    sentValue("toDoElements", data);
    setHandleData(data);
  }

  const handleUpdate = () => {
    const [getData] = handleData;
    getData.title = getValue;
    saveModifyData(localStorageData);
    setUpdate(false);
  };
  const cancelUpdate = () => {
    setUpdate(false);
    setHandleData(localStorageData);
  }

  const deleteFunction = id => {
   const updateData = handleData.filter(el => el.id !== id);
    saveModifyData(updateData);
  }

  const checkLocalStorage = name =>{
    if (getData(name) === null) {
      const newArr = [];
      sentValue(name, newArr);
    }
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
     const updateData = handleData.filter(el => el.id === id);
    const [data] = updateData;
    const itemsLocalStorage = getData(name);
    itemsLocalStorage.push(data);
    sentValue(name, itemsLocalStorage);
    deleteFunction(id);
    setCheckToDoElementsData(itemsLocalStorage);
  }

  const buttonFunction = (e, id) => {
    setButtonName(e.target.outerText);
    switch (buttonName) {
      case "UPDATE":
        updateFunction(e, id);
        break;
      
      case "READY":
        handleReady(e, id, "checkToDoElements");
        break;
      
      case "DELETE":
        deleteFunction(id);
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
