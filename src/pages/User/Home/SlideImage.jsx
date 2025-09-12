import { useState } from "react";
import styles from "./SlideImage.module.scss";
import {
  hotelmoi1,
  hotelmoi2,
  hotelmoi3,
  hotel5,
  house,
} from "../../../assets/images/img";
const images = [
  { src: hotelmoi1, title: "Không gian nghỉ dưỡng đẳng cấp" },
  { src: hotelmoi2, title: "Ẩm thực tinh hoa Á – Âu" },
  { src: hotelmoi3, title: "Trải nghiệm văn hóa Việt" },
  { src: hotel5, title: "Không gian nghỉ dưỡng đẳng cấp" },
  { src: house, title: "Kỳ nghỉ trong mơ tại Furama" },
];

export default function SlideImage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.slideImg}>
      <h2>Khám Phá Furama Resort</h2>
      <div className={styles.container}>
        {images.map((item, index) => (
          <div
            key={index}
            className={`${styles.panel} ${
              activeIndex === index ? styles.active : ""
            }`}
            style={{ backgroundImage: `url(${item.src})` }}
            onClick={() => setActiveIndex(index)}
          >
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
