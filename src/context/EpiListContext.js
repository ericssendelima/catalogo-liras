import { createContext, useState } from "react";

export const EpiListContext = createContext();

export const EpiLisContextProvider = ({ children }) => {
  const [epiList, setEpiList] = useState([]);

  return (
    <EpiListContext.Provider value={{ epiList, setEpiList }}>
      {children}
    </EpiListContext.Provider>
  );
};
