import styles from "../pages/MainPage.module.css";

const Main = () => {
  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h2>YOU FIT</h2>
        <button className={`${styles.buttonEmpty} ${styles.aboutButton}`}>
          About
        </button>
      </header>

      <main className={styles.mainContent}>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Woman Training"
        />

        <div>
          <hr className={styles.upperHr} />
          <h1>FIND YOUR PERFECT WORKOUT</h1>
          <button className={`${styles.squaredButton} ${styles.outlineButton}`}>
            View Exercises
          </button>
          <button className={`${styles.squaredButton} ${styles.orangeButton}`}>
            Build Your Workout
          </button>
          <hr className={styles.lowerHr} />
        </div>
      </main>

      <footer>
        <button className={styles.buttonEmpty}>WORKOUT FOR BEGINNERS</button>
        <button className={styles.buttonEmpty}> IMPROVE YOUR ENDURANCE</button>
        <button className={styles.buttonEmpty}>15 MINUTES WORKOUTS</button>
        <button className={styles.buttonEmpty}>CARDIO</button>
      </footer>
    </div>
  );
};

export default Main;
