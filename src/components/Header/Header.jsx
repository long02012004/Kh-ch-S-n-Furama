import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, NavLink } from "react-router-dom";
import { logo, avatar } from "../../assets/images/img";
import styles from "./Header.module.scss";

const Header = ({ isLoggedIn }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
    window.location.reload(); // hoặc bạn có thể truyền hàm setIsLoggedIn(false)
  };
  // đổi màu header khi cuộn
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`header-container ${scrolled ? styles.scrolled : ""}`}>
        <header className={styles.header}>
          <div className={styles.header__logo}>
            <Link to="/home">
              <img
                src={logo}
                alt="Khách Sạn ABC"
                className={styles.header__logo}
              />
            </Link>
          </div>

         <div className={styles.header__nav}>
            <ul className={`${styles.nav} `}>
              <li className={styles.nav__item}>
                <NavLink className={styles.nav__link} to="/home">
                  Trang chủ
                </NavLink>
              </li>
              <li className={styles.nav__item}>
                <NavLink className={styles.nav__link} to="/food">
                  Ẩm thực
                </NavLink>
              </li>
  
              <li className={styles.nav__item}>
                <NavLink className={styles.nav__link} to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className={styles.nav__item}>
                <NavLink className={styles.nav__link} to="/offers">
                  Ưu Đãi
                </NavLink>
              </li>
              <li className={styles.nav__item}>
                <NavLink className={styles.nav__link} to="/viewroom">
                  Tìm Phòng
                </NavLink>
              </li>
              <li className={styles.nav__item}>
                <NavLink className={styles.nav__link} to="/contact">
                  Liên Hệ
                </NavLink>
              </li>
              <li className={`${styles.nav__item} ${styles.nav__lang}`}>
                <span className={styles.nav__link} tabIndex={0}>
                  Tiếng Việt <i className="bx bx-chevron-down"></i>
                  <ul className={styles.nav__subnav}>
                    <li>
                      <a href="#">Tiếng Anh</a>
                    </li>
                    <li>
                      <a href="#">Tiếng Hàn</a>
                    </li>
                    <li>
                      <a href="#">Tiếng Trung</a>
                    </li>
                  </ul>
                </span>
              </li>
            </ul>
         </div>
          <div>
            {isLoggedIn ? (
              <>
                <li className={styles.nav__item}>
                  <Link className={styles.nav__link} to="/profile">
                    <img
                      src={avatar}
                      alt="Avatar"
                      className={styles.header__logo}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        marginRight: 8,
                      }}
                    />
                    <span>Quang Long</span>
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <button
                    className={styles.nav__link}
                    onClick={handleLogout}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Đăng xuất
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className={styles.nav__item}>
                  <Link className={styles.nav__btn} to="/login">
                    Đăng nhập
                  </Link>
                </li>
                <li className={styles.nav__item}>
                  <Link className={styles.nav__btn} to="/sign-up">
                    Đăng ký
                  </Link>
                </li>
              </>
            )}
          </div>
        </header>
      </div>
    
    </>
  );
};

export default Header;
