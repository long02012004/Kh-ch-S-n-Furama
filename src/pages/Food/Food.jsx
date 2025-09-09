import styles from "./Food.module.scss";
import PhotoTransitionEffect from "./PhotoTransitionEffect";
import { CiCirclePlus } from "react-icons/ci";
import {
  food1,
  food2,
  food3,
  food4,
  food5,
  food6,
  food7,
  food8,
  food9,
  food10,
  food11,
  food12,
  food13,
  food14,
  food15,
  food16,
  food17,
  food18,
  food19,
  food20,
  food21,
  food22,
  food23,
} from "../../assets/images/img";
import Bars from "./Bars";
import ExclusiveOffers from "./ExclusiveOffers";
import Footer from "../../components/Footer/Footer";
const image1 = [food1, food2, food3, food4, food5, food6, food7, food8, food9];
const image2 = [food10, food11, food12, food13, food14];
const image3 = [food15, food16, food17, food18];
const image4 = [food15];
const image5 = [food19, food20, food21, food22];
const image6 = [food23];
const Food = () => {
  return (
    <>
      <div className={styles["container__food"]}>
        <section className={styles["food-section"]}>
          <div className={styles["food-section__header"]}>
            <div className={styles["default__frame"]}>
              <p className={styles["food-section__category"]}>ẨM THỰC</p>
              <h1 className={styles["food-section__title"]}>
                Sự Hòa Quyện Giữa Hương Vị Địa Phương và Tinh Hoa Ẩm Thực
              </h1>
              <div className={styles["food-section__tab-menu"]}>
                <span
                  className={`${styles["food-section__tab"]} ${styles["food-section__tab--active"]}`}
                >
                  NHÀ HÀNG &amp; BAR
                </span>
                <span className={styles["food-section__tab"]}>
                  ƯU ĐÃI ĐỘC QUYỀN
                </span>
              </div>
              <p className={styles["food-section__description"]}>
                Trải nghiệm ẩm thực tại khu nghỉ dưỡng là sự kết hợp hài hòa
                giữa các món ăn Việt Nam truyền thống, cảm hứng địa phương cùng
                ẩm thực Ý và quốc tế. Khu nghỉ dưỡng mang đến cho du khách nhiều
                lựa chọn ẩm thực phong phú – từ quầy bar tre trung thoáng đãng
                nhìn ra biển, đến Tàya House bao quanh bởi khu vườn nhiệt đới;
                phong cách ẩm thực Ý đích thực tại Don Cipriani’s; hương vị Á
                Đông tinh tế với hải sản tươi sống tại Café Indochine; hay ẩm
                thực đặc trưng miền Trung Việt Nam tại nhà hàng Danaksara.
              </p>
            </div>
          </div>
        </section>
        {/* trái phải */}
        <section className={styles["restaurant-section"]}>
          <div className={styles["restaurant__image"]}>
            <PhotoTransitionEffect images={image1} />
          </div>
          <div className={styles["restaurant__content"]}>
            <h2 className={styles["restaurant__topic"]}>
              STEAK & SEAFOOD CENTRAL VIETNAM OFFER
            </h2>
            <h2 className={styles["restaurant__title"]}>CAFÉ INDOCHINE</h2>
            <p className={styles["restaurant__desc"]}>
              Là lựa chọn yêu thích của cả khách địa phương và khách lưu trú,
              Café Indochine – nhà hàng đầu tiên của Furama Resort Danang – mang
              đến sự kết hợp tinh tế giữa ẩm thực Châu Âu, Ấn Độ và Châu Á, đặc
              biệt là các món ăn Việt truyền thống được phục vụ theo phong cách
              “Mâm Đồng”, sử dụng đĩa sứ và khay đồng gợi nhớ về một thời xưa cũ
              đầy hoài niệm.
            </p>
            <p className={styles["restaurant__desc"]}>
              Café Indochine còn nổi tiếng với Buffet tối Hải sản &amp; Steak,
              phục vụ Tôm hùm Nha Trang chế biến theo yêu cầu, hải sản Đà Nẵng
              tươi sống không giới hạn, thịt bò cao cấp nướng Teppanyaki, cùng
              hơn 70 món ăn đặc sắc được chế biến trực tiếp tại bếp mở.
            </p>
            <div className={styles["review__add"]}>
              <p className={styles["review__text"]}>Xem thêm</p>
              <CiCirclePlus className={styles["review__icon"]} />
            </div>
            <div className={styles["restaurant__actions"]}>
              <button className={styles["btn-reserve"]}>ĐẶT BÀN</button>
            </div>
          </div>
        </section>
        {/* Phải- trái */}
        <section
          className={`${styles["restaurant-section"]} ${styles["section2"]}`}
        >
          <div className={`${styles["restaurant__image"]} }`}>
            <PhotoTransitionEffect images={image2} />
          </div>
          <div className={styles["restaurant__content"]}>
            <h2 className={styles["restaurant__topic"]}>
              ITALIAN FLARE WITH AN INTRIGUING TWIST
            </h2>
            <h2 className={styles["restaurant__title"]}>DON CIPRIANI'S</h2>
            <p className={styles["restaurant__desc"]}>
              Lạc vào phong cách thiết kế nội thất tinh tế đậm chất Ý và thưởng
              thức những món ăn Ý tuyệt vời nhất tại đây trong khung cảnh lý
              tưởng cho bữa ăn ngoài trời bên hồ bơi hoặc trong phòng điều hoà
              thoáng mát, Don Cipriani’s tại khu nghỉ dưỡng Furama Đà Nẵng là
              nơi phục vụ các món ăn truyền thống của Ý sử dụng các nguyên liệu
              địa phương và nhập khẩu hảo hạng được trình bày vô cùng nghệ thuật
              bởi các đầu bếp giàu kinh nghiệm của nhà hàng.
            </p>
            <p className={styles["restaurant__desc"]}>
              Các món ăn Ý truyền thống nổi bật sẽ được trình bày nghệ thuật bởi
              các đầu bếp dày dạn kinh nghiệm, trong không gian thư giãn và thân
              thiện, với làn gió mát từ Thái Bình Dương
            </p>
            <div className={styles["review__add"]}>
              <p className={styles["review__text"]}>Xem thêm</p>
              <CiCirclePlus className={styles["review__icon"]} />
            </div>
            <div className={styles["restaurant__actions"]}>
              <button className={styles["btn-reserve"]}>ĐẶT BÀN</button>
            </div>
          </div>
        </section>
        <section className={styles["restaurant-section"]}>
          <div className={styles["restaurant__image"]}>
            <PhotoTransitionEffect images={image3} />
          </div>
          <div className={styles["restaurant__content"]}>
            <h2 className={styles["restaurant__topic"]}>
              A Wellness Dining Home{" "}
            </h2>
            <h2 className={styles["restaurant__title"]}>TÀYA HOUSE</h2>
            <p className={styles["restaurant__desc"]}>
              Tọa lạc yên bình dưới tán cây xanh mướt của Vườn Lagoon tại Furama
              Resort Đà Nẵng, được biết đến như “Đảo Xanh giữa lòng thành phố”,
              Taya House nhẹ nhàng kể lại câu chuyện thú vị về hành trình cuộc
              đời của mình, từ Mường Khu – Vùng Đất Của Những Viên Đá đến Đà
              Nẵng – Thành Phố Của Biển Xanh.
            </p>
            <p className={styles["restaurant__desc"]}>
              Tại Furama Resort Đà Nẵng, du khách sẽ có cơ hội trải nghiệm không
              gian văn hóa phong phú của cộng đồng dân tộc Tây Bắc, thưởng thức
              vẻ đẹp thiên nhiên và kiến trúc độc đáo của ngôi nhà, cũng như
              tham gia các hoạt động văn hóa và ẩm thực như lớp học nấu ăn, biểu
              diễn múa dân tộc, thiền, và các hoạt động yoga.
            </p>
            <div className={styles["review__add"]}>
              <p className={styles["review__text"]}>Xem thêm</p>
              <CiCirclePlus className={styles["review__icon"]} />
            </div>
            <div className={styles["restaurant__actions"]}>
              <button className={styles["btn-reserve"]}>ĐẶT BÀN</button>
            </div>
          </div>
        </section>
        <section
          className={`${styles["restaurant-section"]} ${styles["section2"]}`}
        >
          <div className={`${styles["restaurant__image1"]} }`}>
            <img src={image4} alt="" />
          </div>
          <div className={styles["restaurant__content"]}>
            <h2 className={styles["restaurant__topic"]}>
              AUTHENTIC TASTE FROM CENTRAL VIETNAM
            </h2>
            <h2 className={styles["restaurant__title"]}>DANAKSARA</h2>
            <p className={styles["restaurant__desc"]}>
              Nhà hàng Danaksara được đặt tên dựa trên sự kết hợp giữa tên gọi
              cổ xưa của thành phố – “Danak” và từ “Sara” trong tiếng Hebrew,
              mang nghĩa là một nữ tư tế hay người phụ nữ lãnh đạo.
            </p>
            <p className={styles["restaurant__desc"]}>
              Tọa lạc ngay trung tâm khu nghỉ dưỡng sang trọng Furama Villas
              Danang, Danaksara mang đến hành trình ẩm thực độc đáo khám phá
              hương vị ẩm thực truyền thống miền Trung Việt Nam. Tại đây, thực
              khách sẽ được thưởng thức những món ăn đậm đà bản sắc, hài hòa
              giữa kết cấu tinh tế, hương vị đậm đà, và màu sắc bắt mắt – những
              món ăn gắn liền với ký ức của người dân địa phương cũng như để lại
              ấn tượng sâu sắc với du khách quốc tế khi nghĩ đến nền ẩm thực
              Việt Nam, đặc biệt là vùng miền Trung.
            </p>
            <div className={styles["review__add"]}>
              <p className={styles["review__text"]}>Xem thêm</p>
              <CiCirclePlus className={styles["review__icon"]} />
            </div>
            <div className={styles["restaurant__actions"]}>
              <button className={styles["btn-reserve"]}>ĐẶT BÀN</button>
            </div>
          </div>
        </section>
        <section className={styles["restaurant-section"]}>
          <div className={styles["restaurant__image"]}>
            <PhotoTransitionEffect images={image5} />
          </div>
          <div className={styles["restaurant__content"]}>
            <h2 className={styles["restaurant__topic"]}>
              FOR THE TRUE STEAK LOVERS
            </h2>
            <h2 className={styles["restaurant__title"]}>STEAK HOUSE THE FAN</h2>
            <p className={styles["restaurant__desc"]}>
              Được hun đúc trong mạch nguồn di sản
            </p>
            <p className={styles["restaurant__desc"]}>
              Từng được vinh danh là một trong những điểm đến ẩm thực ven biển
              biểu tượng nhất Đà Nẵng, Steak House The Fan nay trở lại đầy ngoạn
              mục. Nổi tiếng với những phần steak thượng hạng, dịch vụ tinh tế
              và không gian bên biển ấn tượng, nhà hàng sẵn sàng khẳng định lại
              vị thế huyền thoại – với một diện mạo mới đầy hấp dẫn.
            </p>
            <div className={styles["review__add"]}>
              <p className={styles["review__text"]}>Xem thêm</p>
              <CiCirclePlus className={styles["review__icon"]} />
            </div>
            <div className={styles["restaurant__actions"]}>
              <button className={styles["btn-reserve"]}>ĐẶT BÀN</button>
            </div>
          </div>
        </section>
        <section
          className={`${styles["restaurant-section"]} ${styles["section2"]}`}
        >
          <div className={`${styles["restaurant__image1"]} }`}>
            <img src={food12} alt="" />
          </div>
          <div className={styles["restaurant__content"]}>
            <h2 className={styles["restaurant__topic"]}>
              ENJOYMENT IN A TROPICAL COLONIAL SETTING
            </h2>
            <h2 className={styles["restaurant__title"]}>HAI VAN LOUNGE</h2>
            <p className={styles["restaurant__desc"]}>
              Thưởng thức các loại cocktail quốc tế, rượu vang và các món ăn nhẹ
              trong không gian tinh tế, sang trọng tại Hai Van Lounge, nơi có
              chương trình nhạc Jazz và lounge sống động mỗi đêm.
            </p>
            <p className={styles["restaurant__desc"]}>
              Từ đây, tầm nhìn mở ra khung cảnh đầy thi vị: khu sân trong mang
              tính biểu tượng hoặc hồ bơi vô cực hướng ra biển. Đừng bỏ lỡ tiệc
              trà chiều và buffet tráng miệng độc đáo mỗi ngày, với 20 loại trà
              thảo mộc địa phương và gần 25 loại bánh ngọt hấp dẫn được tuyển
              chọn kỹ lưỡng.
            </p>
            <div className={styles["review__add"]}>
              <p className={styles["review__text"]}>Xem thêm</p>
              <CiCirclePlus className={styles["review__icon"]} />
            </div>
            <div className={styles["restaurant__actions"]}>
              <button className={styles["btn-reserve"]}>ĐẶT BÀN</button>
            </div>
          </div>
        </section>
        <section className={styles["restaurant-section"]}>
          <div className={`${styles["restaurant__image1"]} }`}>
            <img src={image6} alt="" />
          </div>
          <div className={styles["restaurant__content"]}>
            <h2 className={styles["restaurant__topic"]}>
              V-SENSES HERITAGE HOUSE
            </h2>
            <h2
              className={`${styles["restaurant__title"]} ${styles["coming-soon"]}`}
            >
              COMING SOON…
            </h2>
          </div>
        </section>
        <Bars />
        <ExclusiveOffers />
        <Footer />
      </div>
    </>
  );
};

export default Food;
