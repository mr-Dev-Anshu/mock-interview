import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const AllUsersContext = React.createContext();

export default function AllUsersContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        const snapData = await getDocs(collection(db, "users"));
        const list = [] ;
         snapData.forEach((doc)=> {
           list.push({id:doc.id , ...doc.data()})
         })
        setAllUsers(list);
        setLoading(false); 
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AllUsersContext.Provider value={{ loading, allUsers }}>
      {loading ? "Loading..." : children} 
    </AllUsersContext.Provider>
  );
}
