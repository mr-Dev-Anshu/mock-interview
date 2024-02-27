import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import Swiper from "../components/Swiper";
import { Toaster } from "react-hot-toast";
import { AllUsersContext } from "../context/allUsers/AllUsersContextProvider";

const Home = () => {
  const { allUsers } = useContext(AllUsersContext);

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Swiper />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allUsers.map((user) => (
          <div key={user.id} className="bg-white rounded-lg shadow-lg p-4">
            <Link to={`/profile/${user.id}`}>
              <img
                className="h-52 w-full object-cover rounded-sm mb-2"
                src={user.profileImg}
                alt={user.full_name}
              />
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">{user.full_name}</p>
                <p className="text-md text-gray-600">{user.domain}</p>
                <p className="text-lg font-bold">{`Qualification ${user.education_level}`}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
