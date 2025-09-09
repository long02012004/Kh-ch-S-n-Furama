import React from "react";
import styles from "./ExclusiveOffers.module.scss";
import { food18, food19, food20 } from "../../assets/images/img";
// Demo data (bạn có thể lấy từ API hoặc props)
const offers = [
  {
    id: 1,
    title: "Gói Nghỉ Dưỡng & Học Nấu Ăn Tại Taya House",
    category: "Ẩm thực   Lưu trú",
    price: "Chỉ từ VND 10.900.000 /2 đêm/2 khách",
    description:
      "Khám phá sự thoải mái và sang trọng với gói nghỉ dưỡng & học nấu ăn tại Taya House, Furama Resort Đà Nẵng. Ưu đãi này bao gồm mức giá đặc biệt và các quyền lợi độc quyền, đảm bảo một kỳ nghỉ đáng nhớ.",
    date: "TỪ NAY ĐẾN HẾT NGÀY 31/3/2026",
    img: food18,
  },
  {
    id: 2,
    title: "Buffet Hải Sản và Bít tết",
    category: "Ẩm thực",
    price: "VND 888.000++ /khách",
    description:
      "Furama Resort Danang nổi tiếng với tinh hoa ẩm thực đặc sắc, đặc biệt là tiệc buffet hải sản & bít tết hấp dẫn. Thực đơn bao gồm tôm hùm Nha Trang, hải sản Đà Nẵng tươi sống không giới hạn và bít tết cao cấp theo phong cách Teppanyaki.",
    date: "TỪ NAY ĐẾN HẾT NGÀY 31/12/2025",
    img: food19,
  },
  {
    id: 3,
    title: "Cơm Mâm Đồng Việt Nam",//
    category: "Ẩm thực",
    price: "VND 390.000 net/khách",//
    description:
      "Ẩm thực Việt Nam luôn hấp dẫn. Có rất nhiều lý do để bạn nên thử những món ăn truyền thống thơm ngon tại đây. Câu chuyện ẩm thực ngàn năm hòa quyện cùng nguyên liệu tươi ngon đặc trưng của các vùng miền tạo nên sự cân bằng hoàn hảo.",
    date: "TỪ NAY ĐẾN HẾT NGÀY 31/12/2025",//
    img: food20,
  },
];

const ExclusiveOffers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>ƯU ĐÃI ĐỘC QUYỀN</h2>
        <a href="/">XEM TẤT CẢ</a>
      </div>

      <div className={styles.grid}>
        {offers.map((offer) => (
          <div key={offer.id} className={styles.card}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${offer.img})` }}
            ></div>
            <div className={styles.content}>
              <p className={styles.category}>{offer.category}</p>
              <h3 className={styles.title}>{offer.title}</h3>
              <p className={styles.price}>{offer.price}</p>
              <p className={styles.description}>{offer.description}</p>
              <p className={styles.date}>📅 {offer.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
