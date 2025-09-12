import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import { toast } from "react-toastify";
import { postLogin } from "../../../services/AppService";

const LogIn = () => {
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
  const handleSubmit = async (e) => {
    // Xử lý đăng nhập ở đây (gọi API, kiểm tra, ...)
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }

    if (!password) {
      toast.error("Invalid password");
      return;
    }
    // Nếu thành công:
    e.preventDefault(); // ⛔ chặn reload trang mặc định của form

    let data = await postLogin(email, password);
    if (data.data && data.data.EC === 0) {
      toast.success(data.data.EM);
      navigate("/");
    }
    if (data.data && data.data.EC !== 0) {
      toast.error(data.data.EM);
    }
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-box"]}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["user-box"]}>
            <input
              id="email"
              type="email"
              required
              title="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              id="password"
              type="password"
              required
              title="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button
            className={styles["login-btn"]}
            onClick={() => handleSubmit()}
          >
            Đăng Nhập
          </button>
        </form>
        <div className={styles["forgot-password"]}>
          <span>Quên mật khẩu</span>
          <span>
            <Link to="/sign-up" className={styles["sign-up"]}>
              Đăng ký
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
