import React from "react";
import styles from "./Bars.module.scss";
import { bars1, bars2, bars3 } from "../../assets/images/img";
const Bars = () => {
  const bars = [
    {
      img: bars1,
      title: "THE OCEAN TERRACE",
      desc: "Ocean Terrace là địa điểm lý tưởng để thưởng thức những món ăn và đồ uống thơm ngon trong khi ngắm nhìn khung cảnh đại dương tuyệt đẹp. Âm thanh nhẹ nhàng của sóng vỗ bờ tạo nên một không gian thư giãn đầy thi vị, mang đến trải nghiệm ẩm thực và nghỉ ngơi khó quên.",
      time: "MỖI NGÀY, TỪ 10:00 ĐẾN 21:00",
    },
    {
      img: bars2,
      title: "L’AMUSE GOURMET CAFE",
      desc: "Nằm giữa khu vườn tuyệt đẹp của Furama Villas, với tầm nhìn hướng ra hồ bơi trung tâm, L’Amuse Gourmet Cafe là điểm dừng chân lý tưởng với không gian ấm cúng, nơi du khách có thể thư giãn và tận hưởng các loại nước ép tươi mát, cocktail hấp dẫn và cà phê nguyên chất đậm đà.",
      time: "MỖI NGÀY, TỪ 09:00 ĐẾN 21:00",
    },
    {
      img: bars3,
      title: "LAGOON BAR",
      desc: "Ẩn mình giữa không gian xanh mát của Furama, Lagoon Bar gây ấn tượng với không gian thoáng đãng và những thức uống sảng khoái. Với thiết kế mở cùng tầm nhìn toàn cảnh, nơi đây là điểm lý tưởng để thư giãn và nạp lại năng lượng sau những phút bơi lội thư thả.",
      time: "MỖI NGÀY, TỪ 10:00 ĐẾN 18:00",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {bars.map((bar, index) => (
          <div key={index} className={styles.card}>
            <img src={bar.img} alt={bar.title} className={styles.image} />
            <p className={styles.type}>BAR</p>
            <h3 className={styles.title}>{bar.title}</h3>
            <p className={styles.desc}>{bar.desc}</p>
            <p className={styles.time}>{bar.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bars;
