import React from "react";
import styles from "./FooterBlog.module.scss";

import { logo } from "../../assets/images/img";
import { NavLink } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
const FooterBlog = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["main-content"]}>
        <div className={styles["row"]}>
          {/* column 1 */}
          <div className={styles["column"]}>
            <div className={styles["column-logo"]}>
              <img src={logo} alt="logo" className={styles["logo"]} />
            </div>
            <p className={styles["desc"]}>
              Need to help for your dream Career? trust us. With Lesson, study
              becomes a lot easier with us.
            </p>
            <div className={styles["socials"]}>
              <NavLink to="#!">
                <FaXTwitter />
              </NavLink>
              <NavLink to="#!">
                <IoLogoFacebook />
              </NavLink>
              <NavLink to="#!">
                <FaLinkedin />
              </NavLink>
              <NavLink to="#!">
                <FaInstagram />
              </NavLink>
            </div>
          </div>

          {/* column 2 */}
          <div className={styles["column"]}>
            <h3 className={styles["title"]}>Company</h3>
            <ul className={styles["list"]}>
              <li>
                <NavLink to="#!">About Us</NavLink>
              </li>
              <li>
                <NavLink to="#!">Features</NavLink>
              </li>
              <li>
                <NavLink to="#!">Our Pricing</NavLink>
              </li>
              <li>
                <NavLink to="#!">Latest News</NavLink>
              </li>
            </ul>
          </div>

          {/* column 3 */}
          <div className={styles["column"]}>
            <h3 className={styles["title"]}>Support</h3>
            <ul className={styles["list"]}>
              <li>
                <NavLink to="#!">FAQ’s</NavLink>
              </li>
              <li>
                <NavLink to="#!">Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink to="#!">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="#!">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* column 4 */}
          <div className={styles["column"]}>
            <h3 className={styles["title"]}>Address</h3>
            <ul className={styles["list"]}>
              <li>
                <NavLink to="#!">
                  <strong>Location:</strong> 27 Division St, New York, NY 10002,
                  USA
                </NavLink>
              </li>
              <li>
                <NavLink to="#!">
                  <strong>Email:</strong> email@gmail.com
                </NavLink>
              </li>
              <li>
                <NavLink to="#!">
                  <strong>Phone:</strong> + 000 1234 567 890
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles["copyright"]}>
          <p>Copyright ©2022 webdesign.gdn All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlog;
