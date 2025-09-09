import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Thêm các import dưới đây (đúng đường dẫn tới các component của bạn)
import Home from "./pages/Home/Home.jsx";
import Blog from "./pages/Blog/BlogPage.jsx";
import Offers from "./pages/Offers/OffersPage.jsx";
import Food from "./pages/Food/Food.jsx";
import Login from "./pages/LogIn/LogIn.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import ViewRoom from "./pages/ViewRoom/ViewRoom.jsx";
import Contact from "./pages/Contact/Contact.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </StrictMode>
);
