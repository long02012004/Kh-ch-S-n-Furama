import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây (gọi API, kiểm tra, ...)
    // Nếu thành công:
    navigate("/");
  };

  return (
   <div className={styles["login-container"]}>
      <div className={styles["login-box"]}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["user-box"]}>
            <input
              type="text"
              required
              title="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              type="password"
              required
              title="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="submit" className={styles["login-btn"]}>
            Đăng Nhập
          </button>
        </form>
        <div className={styles["forgot-password"]}>
          <span>Quên mật khẩu</span>
          <span>
            <Link to="/sign-up" className={styles["sign-up"]}>Đăng ký</Link>
          </span>
        </div>
      </div>
   </div>
  );
}

export default LogIn;