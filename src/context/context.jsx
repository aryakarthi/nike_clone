import { useState, createContext } from "react";

const appContext = createContext();

export const AppProvider = ({ children }) => {
  const [active, setActive] = useState("Home");

  return (
    <appContext.Provider value={{ active, setActive }}>
      {children}
    </appContext.Provider>
  );
};

export default appContext;
