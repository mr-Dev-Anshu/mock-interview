import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Footer from "./components/Footer";
import { useContext } from "react";
import { currentUserContext } from "./context/userContext/CurrentUserProvider";
import UserProfilePage from "./pages/UserProfilePage";
import UploadProduct from "./pages/UploadProduct";

function App() {
  const { currUser } = useContext(currentUserContext);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path={currUser ? "/user" : "/register"}
          element={currUser ? <UserProfilePage /> : <Register />}
        />
        <Route path="/product" element={<UploadProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
