import styles from "./Header.module.css";
import { GrFormCheckmark } from "react-icons/gr";

const Header = () => {
  return (
    <header className={styles.header}>
      <button className={`${styles.buttonEmpty} ${styles.aboutButton}`}>
        About
      </button>

      <div className={styles.headerTitle}>
        <h2>YOU</h2>
        <GrFormCheckmark
          color="#EA753B"
          className={styles.checkIcon}
          size="5em"
        />
        <h2 className={styles.fitTitle}>FIT</h2>
      </div>
    </header>
  );
};

export default Header;
