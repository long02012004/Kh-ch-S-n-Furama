import Footer from "../../components/Footer/Footer";
import VideoHome from "../../assets/Video/videohome.mp4";
import styles from "./Home.module.scss";
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import { Outlet } from "react-router-dom";
import SlideImage from "./SlideImage";

import {
  slider2,
  slider3,
  about1,
  about2,
  about3,
  profile1,
  profile2,
  profile3,
  profile4,
} from "../../assets/images/img";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true, // chỉ chạy 1 lần, không bị ẩn khi cuộn lên/xuống
    });
    AOS.refresh(); // đảm bảo load lại khi có nhiều ảnh/section
  }, []);

  return (
    <div className={styles.home__container}>
      <div className={styles.video_section}>
        <video autoPlay loop muted className={styles.video}>
          <source src={VideoHome} type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ thẻ video.
        </video>
      </div>

      <main className={styles.container}>
        <div className={styles.container__content}>
          <h1 className={styles.container__title}>Furama Resort</h1>
          <p className={styles.container__description}>
            Đến với Furama Resort, bạn sẽ được hòa mình vào thiên nhiên trong
            lành, tham gia các hoạt động vui chơi giải trí, thư giãn và nghỉ
            ngơi để thoát khỏi mọi muộn phiền, bộn bề của cuộc sống, thăng hoa
            cảm xúc, những trải nghiệm tuyệt vời nhất.
            <br />
            Đến với chúng tôi, chúng tôi đảm bảo rằng bạn sẽ không hối hận...
          </p>
        </div>
        <div className={styles.image}>
          <div className={styles.image__list}>
            <img src={slider2} alt="Slider 1" />
            <img src={slider3} alt="Slider 2" />
          </div>
        </div>
      </main>

      <section className={styles.about}>
        <div className={styles.about__list}>
          <div className={styles.about__item}>
            <img src={about1} alt="Nhà hàng" className={styles.about__img} />
            <p className={styles.about__caption}>Nhà hàng</p>
            <span className={styles.about__desc}>
              Không chỉ ở lối kiến trúc, ẩm thực của nhà hàng cũng mang đậm nét
              truyền thống
            </span>
          </div>
          <div className={styles.about__item}>
            <img src={about2} alt="Spa" className={styles.about__img} />
            <p className={styles.about__caption}>Spa</p>
            <span className={styles.about__desc}>
              Lạc vào Spa Furama Resort sang trọng và quyến rũ...
            </span>
          </div>
          <div className={styles.about__item}>
            <img src={about3} alt="Yoga" className={styles.about__img} />
            <p className={styles.about__caption}>Yoga</p>
            <span className={styles.about__desc}>
              Khách nghỉ tại Furama Resort có thể tham gia lớp học Yoga...
            </span>
          </div>
        </div>
        <div className={styles.about__text}>
          {/* <div className={styles.about__img}><img src={la} alt="" /></div> */}
          <h1 className={styles.about__heading}>Tiện ích</h1>
          <span className={styles.about__subheading}>
            Khách sạn cung cấp đầy đủ các tiện ích hiện đại như hồ bơi ngoài
            trời, spa thư giãn, phòng gym, nhà hàng sang trọng, khu vui chơi cho
            trẻ em và dịch vụ đưa đón sân bay, mang đến cho quý khách một kỳ
            nghỉ thoải mái và trọn vẹn nhất.
          </span>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.services__container}>
          <h2 className={styles.services__heading}>Dịch vụ nổi bật</h2>
          <div className={styles.services__list}>
            <div className={styles.services__item}>
              <i className="fas fa-spa"></i>
              <h3 className={styles.services__title}>Spa thư giãn</h3>
              <p className={styles.services__desc}>
                Trải nghiệm các liệu trình massage và chăm sóc sức khỏe cao cấp.
              </p>
            </div>
            <div className={styles.services__item}>
              <i className="fas fa-utensils"></i>
              <h3 className={styles.services__title}>Ẩm thực đa dạng</h3>
              <p className={styles.services__desc}>
                Thưởng thức các món ăn đặc sản từ khắp nơi trên thế giới.
              </p>
            </div>
            <div className={styles.services__item}>
              <i className="fas fa-swimmer"></i>
              <h3 className={styles.services__title}>Hồ bơi & Biển</h3>
              <p className={styles.services__desc}>
                Thư giãn cùng làn nước xanh mát và bãi biển tuyệt đẹp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reviews}>
        <h2>Đánh Giá Khách Hàng</h2>
        <div className={styles.reviews__list}>
          {[profile4, profile3, profile1, profile2].map((src, index) => (
            <div key={index} className={styles.review__item}>
              <img
                src={src}
                alt={`Khách hàng ${index + 1}`}
                className={styles.review__avatar}
              />
              <p className={styles.review__name}>
                Nguyễn Văn {String.fromCharCode(65 + index)}
              </p>
              <p className={styles.review__text}>
                "Dịch vụ tuyệt vời! Mọi thứ đều hoàn hảo từ phòng ốc đến ẩm
                thực. Chắc chắn sẽ quay lại."
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*   <section className={styles.gallery}>
        <h2>Khám Phá Furama Resort</h2>

        <div className={styles.gallery__images}>
          {[house, hotel1, hotel2, hotel3, hotel4, hotel5].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Hình ${i}`}
              className={styles["gallery__image"]}
            />
          ))}
        </div>
      </section> */}
      <SlideImage></SlideImage>

      <section className={styles.map}>
        <h2>Vị trí Furama Resort</h2>
        <div className={styles.map__container}>
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
