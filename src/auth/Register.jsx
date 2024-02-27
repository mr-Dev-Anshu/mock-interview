import React, { useState, useContext } from "react";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import { currentUserContext } from "../context/userContext/CurrentUserProvider";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {notifyError, notifySuccess} from "../toaster/Toaster"
import { Toaster } from "react-hot-toast";
const Register = () => {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();
  const { currUser  } = useContext(currentUserContext);
  const [loading , setLoading ] = useState(false) ;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true) ; 
    try {
      const { email, password } = formData;
      const addedUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(addedUser);

      notifySuccess("Sign-up successfully ji ")
      setLoading(false) ;
      navigate("/") ;
    } catch (error) {
      notifyError("Sign up Field ")
    setLoading(false) ;
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center pt-6">
      <div className="flex h-[75%] w-[60%] rounded-xl shadow-2xl overflow-hidden">
        <div className=" w-[50%] h-full p-10 px-12 flex flex-col gap-4">
          {/* <img className="w-28" src={img} alt="" /> */}
          <div className="flex flex-col justify-center gap-2 ">
            <div className="mb-4 flex flex-col gap-6">
              <h1 className="text-3xl font-bold ">Create an Account !</h1>
              <p className="font-light text-slate-500">
                Welcome to MadeforMe! Register here.
              </p>
            </div>
            <div className="py-3">
              <form
                className="flex flex-col gap-4"
                action=""
                onSubmit={handleSubmit}
              >
                <input
                  className="outline p-3 rounded-md outline-slate-200"
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <input
                  className="outline p-3 rounded-md outline-slate-200"
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <button
                  className="outline p-3 rounded-md outline-slate-200 bg-blue-600 text-white font-semibold text-xl"
                  type="submit"
                >
                  {loading?"Loading...":"Register"}
                </button>
              </form>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <p>Already have an account ?</p>
              <HashLink to="/login">
                <p className="text-blue-700 hover:underline">Log in</p>
              </HashLink>
            </div>
          </div>
        </div>
        <div className=" w-[50%] h-full overflow-hidden">
          {/* <img className=" object-cover h-full w-full" src={img3} alt="" /> */}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
