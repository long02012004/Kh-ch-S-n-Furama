import styles from "./OffersPage.module.scss";
const OfferCard = ({
  title,
  items,
  image,
  showButton = false,
  layout = "",
  layout2 = "",
}) => {
  return (
    <div
      className={`${styles["offer-card"]} ${
        styles[layout === "row" ? "row" : ""]
      } ${styles[layout2 === "full" ? "full" : ""]}`}
    >
      <div className={styles["image-container"]}>
        {image && <img className={styles["image"]} src={image} alt={title} />}
      </div>
      <div className={styles["content"]}>
        <h3 className={styles["title"]}>{title}</h3>
        <ul className={styles["list"]}>
          {items.map((item, idx) => (
            <li key={idx} className={styles["list-item"]}>
              {item}
            </li>
          ))}
        </ul>

        {showButton && (
          <button className={styles["btn"]}>Liên hệ tư vấn</button>
        )}
      </div>
    </div>
  );
};

export default OfferCard;
