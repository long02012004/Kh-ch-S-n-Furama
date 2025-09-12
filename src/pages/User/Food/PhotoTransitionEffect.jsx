import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Food.module.scss";

const PhotoTransitionEffect = ({images}) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.carousel__btn} ${styles.left}`}
        onClick={prevSlide}
      >
        <FaChevronLeft />
      </button>

      <div className={styles.carousel__track}>
        {images.map((src, i) => {
          let position = styles.nextSlide;
          if (i === index) position = styles.activeSlide;
          if (i === index - 1 || (index === 0 && i === images.length - 1)) {
            position = styles.lastSlide;
          }

          return (
            <img
              key={i}
              src={src}
              alt={`slide-${i}`}
              className={`${styles.carousel__img} ${position}`}
            />
          );
        })}
      </div>

      <button
        className={`${styles.carousel__btn} ${styles.right}`}
        onClick={nextSlide}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};
export default PhotoTransitionEffect;
