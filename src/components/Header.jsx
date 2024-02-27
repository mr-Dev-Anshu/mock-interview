import React from "react";
import { FaHeart, FaRegUser, FaSearch, FaShoppingBag } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { RiMenu3Fill } from "react-icons/ri";
import { useContext } from "react";
import { currentUserContext } from "../context/userContext/CurrentUserProvider";

const Header = () => {
  let { user } = useContext(currentUserContext);

  return (
    <div className="dark fixed w-full z-10">
      <div className=" bg-white w-full h-fit md:px-10 p-4 flex justify-between items-center">
        <HashLink to="/">
          {/* <img className="h-12" src={v1} alt="" /> */}
        </HashLink>
        <div className="lg:flex hidden text-lg justify-center items-center gap-16">
          <HashLink to="/">Home</HashLink>
          {user ? <HashLink to="/makeprofile">CreateProfile</HashLink> : null}
        </div>
        <div className="lg:flex hidden justify-center items-center gap-12">
          <HashLink>
            <FaSearch size={18} />
          </HashLink>
          <HashLink to="/wishlist">
            <FaHeart size={18} />
          </HashLink>
          <HashLink to="/orders">
            <FaShoppingBag size={18} />
          </HashLink>
          <HashLink to={user ? "/user" : "/login"}>
            {user == null ? (
              <FaRegUser size={18} />
            ) : (
              <p className="outline outline-slate-300 font-bold text-slate-500 h-7 w-7 rounded-full flex justify-center items-center">
                {user.email.charAt(0).toUpperCase()}
              </p>
            )}
          </HashLink>
        </div>
        <HashLink className="md:hidden block">
          <RiMenu3Fill />
        </HashLink>
      </div>
      <hr />
    </div>
  );
};

export default Header;
