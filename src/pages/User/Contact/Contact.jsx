import React from "react";
import styles from "./Contact.module.scss";
import { FaBellConcierge } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className={styles["contact-container"]}>
      {/* Cột trái: Thông tin liên hệ */}
      <div className={styles["contact-info"]}>
        <h2 className={styles["title"]}>Liên hệ với chúng tôi</h2>
        <div className={styles["divider"]}>
          <FaBellConcierge className={styles["bell-icon"]} />
          <div className={styles["divider-line"]}>
            <a href="#" className={styles["booking-link"]}>
              Đặt chỗ
            </a>
          </div>
        </div>

        <div className={styles["info-block"]}>
          <h3 className={styles["subtitle"]}>THÔNG TIN LIÊN LẠC</h3>
          <p className={styles["phone-number"]}>
            Đặt chỗ:{" "}
            <a href="tel:661-479-5700" className={styles["phone"]}>
              661-479-5700
            </a>
          </p>
          <p className={styles["address"]}>
            2400 Camino Del Rio Ct, Bakerfield, CA 93308
          </p>
        </div>

        <div className={styles["map-block"]}>
          <h3 className={styles["subtitle"]}>NHẬN CHỈ ĐƯỜNG</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.321555281019!2d-119.03757992431178!3d35.39032554725907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea6a2141d2a8eb%3A0x4d4a7f4c5a7f74e!2sHourglass%20Hotel%2C%20an%20Ascend%20Hotel%20Collection%20Member!5e0!3m2!1svi!2sus!4v1700000000000"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>

      {/* Cột phải: Form liên hệ */}
      <div className={styles["contact-form"]}>
        <form>
          <label className={styles["label"]}>Name</label>
          <input type="text" className={styles["input"]} />

          <label className={styles["label"]}>Email Address</label>
          <input type="email" className={styles["input"]} />

          <label className={styles["label"]}>Phone Number</label>
          <input type="text" className={styles["input"]} />

          <label className={styles["label"]}>Comments/Questions</label>
          <textarea className={styles["textarea"]}></textarea>

          <label className={styles["label"]}>
            How do you want to be contacted?
          </label>
          <select className={styles["select"]}>
            <option>Email</option>
            <option>Phone</option>
          </select>

          <label className={styles["label"]}>What is 1 + 4 *</label>
          <input type="text" className={styles["input"]} />

          <button type="submit" className={styles["submit-btn"]}>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
