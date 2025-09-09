import React, { useState } from "react";
import { backgroundSignUp, flag, rocket } from "../../assets/images/img";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.scss"; // Chuyển CSS sang SCSS module nếu dùng module

const SignUp = () => {
  const [formData, setFormData] = useState({
    emailPhone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.emailPhone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu xác nhận không khớp.");
      return;
    }

    if (!formData.terms) {
      alert("Bạn phải đồng ý với Điều khoản & Chính sách.");
      return;
    }

    // Xử lý đăng ký tại đây (gọi API)
    // Nếu thành công:
    navigate("/home");
  };

  return (
    <div className={styles["signup-container"]}>
      <div className={styles["sign-up"]}>
        <div className={styles["sign-up__image"]}>
          <img
            className={styles["sign-up__image-main"]}
            src={backgroundSignUp}
            alt="Main"
          />
        </div>
  
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
  
          <Link to="/home" className={styles["sign-up__google-link"]}>
            <button className={styles["sign-up__google-login"]}>
              <i class="fa-brands fa-google"></i> Đăng nhập với Google
            </button>
          </Link>
  
          <div className={styles["sign-up__separator"]}>
            <div className={styles["sign-up__separator-line"]}></div>
            <span className={styles["sign-up__or"]}>Hoặc</span>
            <div className={styles["sign-up__separator-line"]}></div>
          </div>
  
          <form onSubmit={handleSubmit} className={styles["sign-up__form"]}>
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
              value={formData.emailPhone}
              onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
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
                value={formData.confirmPassword}
                onChange={handleChange}
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
                checked={formData.terms}
                onChange={handleChange}
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
  
          <p className={styles["sign-up__login-link"]}>
            Đã có tài khoản?{" "}
            <Link to="/log-in" className={styles["sign-up__login-link-anchor"]}>
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
