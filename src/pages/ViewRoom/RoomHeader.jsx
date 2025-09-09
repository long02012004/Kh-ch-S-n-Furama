import React from "react";
import styles from "./RoomHeader.module.scss";
import { FaLock } from "react-icons/fa";
import { flag } from "../../assets/images/img";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const RoomHeader = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["hotel-info"]}>
        <button className={styles["hotel-btn"]}>
          Wink Hotel Danang Centre
        </button>
        <div className={styles["address"]}>
          <p>178 Tran Phu, Phuoc Ninh Ward, Hai Chau District, Da Nang City</p>
          <p>
            Email: <a>book.danangcentre@wink-hotels.com</a>
          </p>
          <p>Reservation Number: 028 2250 8531</p>
        </div>
      </div>

      <div className={styles["booking-box"]}>
        <div className={styles["input-box"]}>
          <label htmlFor="checkin">Check-in</label>
          <div className={styles["input-wrapper"]}>
            <DatePicker
              selected={date}
              onChange={(d) => setDate(d)}
              dateFormat="dd/MM/yyyy"
              className={styles["date-picker"]}
              id="checkin"
            />
            <span className={styles["calendar-icon"]}>📅</span>
          </div>
        </div>
        <div className={styles["input-box"]}>
          <label htmlFor="adults">Số lượng người lớn</label>
          <select id="adults" className={styles["select-box"]}>
            <option>1 người lớn</option>
            <option>2 người lớn</option>
            <option>3 người lớn</option>
          </select>
        </div>
        <div className={styles["button-group"]}>
          <button className={styles["icon-btn"]}>
            <div className={styles["icon-lock"]}>
              <FaLock style={{ fontSize: "18px", color: "#dc1616ff" }} />
            </div>
            <span>Mã khuyến mãi</span>
          </button>
          <button className={styles["flag-btn"]}>
            <img src={flag} alt="Vietnam Flag" />
            <div className={styles["currency-btn"]}>
              <p className={styles["currency-text"]}>VND</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomHeader;
