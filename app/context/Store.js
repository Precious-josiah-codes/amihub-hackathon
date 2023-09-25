"use client";

import { createContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const toggleSideMenu = () => {
    setDisplaySideMenu(!displaySideMenu);
  };

  const data = {
    isMobile,
    displaySideMenu,
    toggleSideMenu,
  };

  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
