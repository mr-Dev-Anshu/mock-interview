import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Footer from "./components/Footer";
import { useContext } from "react";
import { currentUserContext } from "./context/userContext/CurrentUserProvider";
import UserProfilePage from "./pages/UserProfilePage";
import CreateProfile from "./pages/CreateProfile"; 
function App() {
  const { user  } = useContext(currentUserContext);

  return (
    <Router>
       <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route
          path={user ? "/user" : "/register"}
          element={user  ? <UserProfilePage /> : <Register />}
        />
        <Route path="/login" element={<Login />} />
         
        <Route path="/makeprofile" element={<CreateProfile />} />
      </Routes>
      <Footer />
    </Router>

 
  );
}

export default App;
