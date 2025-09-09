import RoomHeader from "./RoomHeader";
import styles from "./ViewRoom.module.scss";
import RoomSelection from "./RoomSelection";
import Footer from "../../components/Footer/Footer";
const ViewRoom = () => {
  return (
    <>
      <div className={styles["view-room"]}>
        <RoomHeader />
        <RoomSelection />
      </div>
      <Footer />
    </>
  );
};

export default ViewRoom;
// // src/pages/ViewRoom/ViewRoom.jsx
