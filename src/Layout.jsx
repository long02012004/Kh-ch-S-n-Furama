import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/User/Home/Home.jsx";
import Blog from "./pages/User/Blog/BlogPage.jsx";
import Offers from "./pages/User/Offers/OffersPage.jsx";
import Food from "./pages/User/Food/Food.jsx";
import Login from "./pages/Auth/LogIn/LogIn.jsx";
import Profile from "./pages//User/Profile/Profile.jsx";
import SignUp from "./pages/Auth/SignUp/SignUp.jsx";
import ViewRoom from "./pages/User/ViewRoom/ViewRoom.jsx";
import Contact from "./pages/User/Contact/Contact.jsx";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} /> {/* 👈 Trang mặc định */}
          <Route path="home" element={<Home />} />
          <Route path="offers" element={<Offers />} />
          <Route path="food" element={<Food />} />
          <Route path="profile" element={<Profile />} />
          <Route path="viewroom" element={<ViewRoom />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="sign-up" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Blog />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};
export default Layout;
