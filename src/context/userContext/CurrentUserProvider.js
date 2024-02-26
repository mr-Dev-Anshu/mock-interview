import React, { createContext, useEffect, useState } from "react";

export const currentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState();

 

  

  return (
    <currentUserContext.Provider value={{ currUser, setCurrUser }}>
      {children}
    </currentUserContext.Provider>
  );
};

