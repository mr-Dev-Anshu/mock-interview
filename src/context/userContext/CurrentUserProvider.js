import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
export const currentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [user, setCurrUser] = useState();
  const [loading, setLoading] = useState(false);
  onAuthStateChanged(auth, (currUser) => {
    if (currUser) {
      setCurrUser(currUser);
    }
    setLoading(true) 
    console.log(user, "this is context ");
  });

  return (
    <currentUserContext.Provider value={{ user, setCurrUser }}>
      {(!loading) ? (
        <div className="flex justify-center h-screen text-4xl text-blue-600  items-center">
          Loading ..{" "}
        </div>
      ) : (
        children
      )}
    </currentUserContext.Provider>
  );
};
