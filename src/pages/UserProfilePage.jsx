import React, { useContext } from "react";
import { currentUserContext } from "../context/userContext/CurrentUserProvider";

// import userprofile from "../assets/User.jpg";
import { FaHandsHelping } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../toaster/Toaster";

const UserProfilePage = () => {
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    notifySuccess("Sign out Successfully !!!!");
    navigate("/");
    window.location.reload();
  };
  const { user } = useContext(currentUserContext);

  return (
    <div className="pt-20 w-full">
      <div className=" p-12 flex gap-4 w-full">
        <div className="p-2">
          <div className="flex flex-col justify-center shadow-xl rounded-lg p-2 gap-2">
            <div className="shadow-lg rounded-lg w-full flex flex-col justify-center items-center gap-2 p-2">
              {/* <img
                className="h-48 w-48 shadow-xl object-cover rounded-full"
                src={userprofile}
                alt=""
              /> */}
            </div>
            <div className="p-2 flex flex-col shadow-xl">
              <p className="font-semibold">Email : </p>
              <p>{user.email}</p>
            </div>
            <div className="p-2 flex flex-col shadow-xl">
              <p className="font-semibold">Verified : </p>
              <p>{user.isVerified === 1 ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          {" "}
          <button>
            <div className=" w-full flex justify-start items-center gap-12 shadow-xl rounded-lg p-4 hover:bg-orange-400 transition-colors duration-200 ">
              <FaHandsHelping className=" drop-shadow-xl" size={64} />
              <p className="text-3xl font-semibold">Help & Support</p>
            </div>
          </button>
        </div>
        <div className="p-4 text-xl font-semibold rounded-lg shadow-xl flex justify-center items-center hover:bg-orange-400 transition-colors duration-200">
          <button onClick={logout} className="w-full">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserProfilePage;
