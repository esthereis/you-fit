import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.mainContent}>
      <img
        className={styles.image}
        src="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Woman Training"
      />

      <div>
        <h1>FIND YOUR PERFECT WORKOUT</h1>
        <button className={`${styles.squaredButton} ${styles.outlineButton}`}>
          View Exercises
        </button>

        <button className={`${styles.squaredButton} ${styles.orangeButton}`}>
          Build Your Workout
        </button>
      </div>
    </main>
  );
};

export default Main;
