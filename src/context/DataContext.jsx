import React, { createContext, useState } from "react";
import { All_Data } from "../utils/Data";

export const DataContext = createContext(null);

export const DataProvider = (props) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState(null);
  const [currentDestination, setCurrentDestination] = useState(null);
  const [des_open, setDes_Open] = useState(false);

  const handleToggle = (e) => {
    if (e.target.className !== "book_now_button") {
      setOpen(true);
    }
  };

  return (
    <DataContext.Provider
      value={{
        All_Data,
        showSideMenu,
        setShowSideMenu,
        open,
        handleToggle,
        setCurrentPackage,
        currentPackage,
        setOpen,
        des_open,
        setDes_Open,
        currentDestination,
        setCurrentDestination,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
