import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__section}>
            <h3 className={styles.footer__heading}>FURAMA RESORT</h3>
            <p className={styles.footer__text}>
              147 Mai Dịch, Cầu Giấy, Hà Nội
            </p>
            <p className={styles.footer__text}>Hotline: 0242 242 0777</p>
            <p className={styles.footer__text}>Email: info@webhotel.vn</p>
          </div>

          <div className={styles.footer__section}>
            <h3 className={styles.footer__heading}>ĐẶT PHÒNG</h3>
            <p>
              <a href="#" className={styles.footer__link}>
                Điều kiện & điều khoản
              </a>
            </p>
            <p>
              <a href="#" className={styles.footer__link}>
                Chính sách bảo mật
              </a>
            </p>
          </div>

          <div className={styles.footer__section}>
            <h3 className={styles.footer__heading}>NHỮNG ĐIỀU CẦN BIẾT</h3>
            <p>
              <a href="#" className={styles.footer__link}>
                Cảnh báo
              </a>
            </p>
            <p>
              <a href="#" className={styles.footer__link}>
                Câu hỏi thường gặp
              </a>
            </p>
            <p>
              <a href="#" className={styles.footer__link}>
                Hướng dẫn di chuyển
              </a>
            </p>
          </div>

          <div className={styles.footer__section}>
            <h3 className={styles.footer__heading}>VỀ CHÚNG TÔI</h3>
            <p className={styles.footer__text}>
              Furama Resort là khu nghỉ dưỡng 5 sao hàng đầu tại Việt Nam, nổi
              bật với không gian sang trọng, dịch vụ đẳng cấp và vị trí lý tưởng
              sát biển.
            </p>
          </div>

          <div
            className={`${styles.footer__section} ${styles["footer__section--social"]}`}
          >
            <h3 className={styles.footer__heading}>KẾT NỐI VỚI CHÚNG TÔI</h3>
            <div className={styles.footer__socialIcons}>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          Copyright © Furama Resort. 2025 All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
