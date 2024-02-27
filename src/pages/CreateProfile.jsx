import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { currentUserContext } from "../context/userContext/CurrentUserProvider";
import { db, storage } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { notifyError, notifySuccess } from "../toaster/Toaster";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const CreateProfile = () => {
  const { user } = useContext(currentUserContext);
  const [formData, setFormData] = useState();
  const [file, setFile] = useState();
  const [img, setImg] = useState();
  const dbconfig = doc(db, "users", user?.uid);
  console.log(file);
  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.email = user?.email;
    try {
      const name = Date.now() + file?.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      const snapshot = await uploadTask;

      const downloadURL = await getDownloadURL(snapshot.ref);
      setImg(downloadURL);
      formData.profileImg = downloadURL;

      const newDoc = await setDoc(dbconfig, formData);
      notifySuccess("Profile Create successfull");
    } catch (error) {
      console.log(error);
      notifyError("Creation field");
    }
  };

  const handleFile = (e) => {
    setFile(e.target?.files[0]);
  };

  return (
    <div className="pt-12 flex justify-center items-center">
      <div className=" h-fit w-fit p-8">
        <form
          className=" flex flex-col shadow-xl rounded-xl p-6 gap-4"
          action=""
          method="POST"
        >
          {/* <img className="" src={logo} alt="" /> */}
          <p className="text-center text-xl font-bold uppercase shadow-xl rounded-lg p-1 ">
            Make you Profile here
          </p>
          <input
            required
            className=" p-2 rounded-lg  shadow-xl capitalize "
            type="text"
            placeholder="Full Name "
            onChange={handlechange}
            id="full_name"
          />
          <input
            required
            className=" p-2 rounded-lg  shadow-xl capitalize"
            type="text"
            placeholder="Domain"
            onChange={handlechange}
            id="domain"
          />

          <input
            required
            className="p-2 rounded-lg   shadow-xl "
            type="text"
            placeholder="Education level "
            onChange={handlechange}
            id="education_level"
          />
          <input
            required
            className="p-2 rounded-lg   shadow-xl"
            type="text"
            placeholder="Skills Discreption"
            onChange={handlechange}
            id="siklls_dis"
          />
          <input
            className="p-2 rounded-lg shadow-xl"
            type="text"
            placeholder="Linkdin Url"
            onChange={handlechange}
            id="linkedin"
          />
          <input
            className="p-2 rounded-lg shadow-xl"
            type="file"
            id="productImg"
            onChange={handleFile}
            name="img"
            accept="image/*"
          />

          <button
            onClick={handleSubmit}
            className=" p-2 rounded-lg shadow-xl text-xl bg-green-200 font-bold font-serif  "
          >
            Create
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
