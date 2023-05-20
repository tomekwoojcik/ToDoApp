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
  const [localStorageData, setlocalStorageData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [itemsLocalStorageIs, setItemsLocalStorageIs] = useState(false);
  const [checkToDoElementsData, setCheckToDoElementsData] = useState();

  const onChangeInput = e => setGetValue(e.target.value);

  const sentData = () => {

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
    localStorageData(localStorageCopy);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      sentData();
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

    const saveModifyData = (data) => {
     localStorage.setItem("toDoElements", JSON.stringify(data));
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

  const deleteFunction = (id) => {
   const updateData = handleData.filter((el) => {
      return el.id !== id;
    });
    saveModifyData(updateData);
  }

  const createCheckList = (name, arr) => localStorage.setItem(`${name}`, JSON.stringify(arr));

  const checkLocalStorage = (name) =>{
    if (localStorage.getItem(`${name}`) === null) {
      const newArr = [];
      createCheckList(name, newArr);
    }
    const itemsLocalStorage = JSON.parse(localStorage.getItem(`${name}`));
    if (itemsLocalStorage.length !== 0) {
      setItemsLocalStorageIs(true);
      setCheckToDoElementsData(itemsLocalStorage);
    };

  }

  useEffect(() => {
    checkLocalStorage("checkToDoElements")
    /* eslint-disable-next-line */
  }, []);

  const handleReady = (e, id, name) => {
     const updateData = handleData.filter((el) => {
      return el.id === id;
     });
    const [data] = updateData;
    const itemsLocalStorage = JSON.parse(localStorage.getItem(`${name}`));
    itemsLocalStorage.push(data);
    localStorage.setItem(`${name}`, JSON.stringify(itemsLocalStorage));
    deleteFunction(id);
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

  const restoreFun = () => {
    
  }
  const deleteCheckToDoElementFun = (id) => {
    const filterValue = checkToDoElementsData.filter((el) => { return el.id !== id.title.id });
    localStorage.setItem("checkToDoElements", JSON.stringify(filterValue));
    setCheckToDoElementsData(filterValue);
    
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
