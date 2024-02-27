import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
export default function UsersProfile() {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "users", id);
        const userSnap = await getDoc(docRef);
        setUserData(userSnap.data());
        setLoading(false);
      } catch (error) {
        console.log("Error while fetching user details ");
      }
    };

    fetchData();
  }, [id]);
  return (
    <div>
      {loading ? (
        <div className="flex h-screen justify-center items-center text-3xl text-blue-700 ">
          Loading.....{" "}
        </div>
      ) : (
        <div className="h-screen ">
          <div className="p-10 ">
            <img
              className="w-[20%] h-96 rounded-lg  cover "
              src={userData.profileImg}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}
