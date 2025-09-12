import React, { useState } from "react";
import { backgroundSignUp, flag, rocket } from "../../../assets/images/img";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.scss";
import { postSignUp } from "../../../services/AppService";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  // 🟢 Hàm xử lý submit form
  const handleLogin = async (e) => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }

    if (!password) {
      toast.error("Invalid password");
      return;
    }
    e.preventDefault(); // ⛔ chặn reload trang mặc định của form

    try {
      let data = await postSignUp(email, password, "New User");

      if (data.data && data.data.EC === 0) {
        toast.success(data.data.EM);
        navigate("/Login"); // 👉 điều hướng về trang LogIn khi login thành công
        alert("Đăng nhập thành công: " + data.data.EM);
      } else {
        toast.error(data.data.EM);
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Có lỗi xảy ra khi đăng nhập!");
    }
  };

  return (
    <div className={styles["signup-container"]}>
      <div className={styles["sign-up"]}>
        {/* Hình ảnh bên trái */}
        <div className={styles["sign-up__image"]}>
          <img
            className={styles["sign-up__image-main"]}
            src={backgroundSignUp}
            alt="Main"
          />
        </div>

        {/* Nội dung bên phải */}
        <div className={styles["sign-up__content"]}>
          <div className={styles["sign-up__header"]}>
            <img
              className={styles["sign-up__header-flag"]}
              src={flag}
              alt="Flag"
            />
            <i className="bx bx-chevron-down"></i>
          </div>

          <h2 className={styles["sign-up__title"]}>
            Đăng ký
            <img
              className={styles["sign-up__image-rocket"]}
              src={rocket}
              alt="Rocket"
            />
          </h2>

          {/* Nút login với Google */}
          <Link to="/home" className={styles["sign-up__google-link"]}>
            <button className={styles["sign-up__google-login"]}>
              <i className="fa-brands fa-google"></i> Đăng nhập với Google
            </button>
          </Link>

          {/* Separator */}
          <div className={styles["sign-up__separator"]}>
            <div className={styles["sign-up__separator-line"]}></div>
            <span className={styles["sign-up__or"]}>Hoặc</span>
            <div className={styles["sign-up__separator-line"]}></div>
          </div>

          {/* 🟢 SỬA 1: thêm onSubmit={handleLogin} để chặn reload và gọi API */}
          <form className={styles["sign-up__form"]} onSubmit={handleLogin}>
            <label htmlFor="email" className={styles["sign-up__label"]}>
              Email hoặc Số Điện Thoại
            </label>
            <input
              id="email"
              className={styles["sign-up__input"]}
              type="text"
              name="emailPhone"
              placeholder="Nhập Email hoặc số điện thoại"
              title="Vui lòng nhập email hoặc số điện thoại"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password" className={styles["sign-up__label"]}>
              Mật khẩu
            </label>
            <div className={styles["sign-up__password-wrapper"]}>
              <input
                id="password"
                className={`${styles["sign-up__input"]} ${styles["sign-up__input--password"]}`}
                type="password"
                name="password"
                placeholder="Nhập mật khẩu"
                title="Vui lòng nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className={styles["sign-up__password-icon"]}>
                <i className="fa-solid fa-eye-slash"></i>
              </div>
            </div>

            <label
              htmlFor="confirm-password"
              className={styles["sign-up__label"]}
            >
              Xác nhận lại mật khẩu
            </label>
            <div className={styles["sign-up__password-wrapper"]}>
              <input
                id="confirm-password"
                className={`${styles["sign-up__input"]} ${styles["sign-up__input--password"]}`}
                type="password"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                title="Xác nhận lại mật khẩu"
              />
              <div className={styles["sign-up__password-icon"]}>
                <i className="fa-solid fa-eye-slash"></i>
              </div>
            </div>

            <div className={styles["sign-up__checkbox"]}>
              <input
                id="terms"
                className={styles["sign-up__checkbox-input"]}
                type="checkbox"
                name="terms"
                title="Đồng ý với Điều khoản & Chính sách"
              />
              <label
                htmlFor="terms"
                className={styles["sign-up__checkbox-label"]}
              >
                Tôi đồng ý với <strong>Điều khoản & Chính sách</strong>
              </label>
            </div>

            <button
              className={styles["sign-up__submit"]}
              type="submit"
              title="Đăng ký tài khoản"
            >
              Đăng ký
            </button>
          </form>

          {/* 🟢 SỬA 2: bỏ onClick={handleLogin()} ở link "Đăng nhập" */}
          <p className={styles["sign-up__login-link"]}>
            Đã có tài khoản?{" "}
            <Link to="/login" className={styles["sign-up__login-link-anchor"]}>
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
