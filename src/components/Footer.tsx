import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <button className={styles.buttonEmpty}>WORKOUT FOR BEGINNERS</button>
      <button className={styles.buttonEmpty}> IMPROVE YOUR ENDURANCE</button>
      <button className={styles.buttonEmpty}>15 MINUTES WORKOUTS</button>
      <button className={styles.buttonEmpty}>CARDIO</button>
    </footer>
  );
};

export default Footer;
