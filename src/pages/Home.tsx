import styles from "../pages/Home.module.css";

const Home = () => {
  return (
    <div>
      <header>
        <h2>YOU FIT</h2>
        <button>about</button>
      </header>

      <main>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Woman Training"
        />
        <h1>FIND YOUR PERFECT WORKOUT</h1>
        <button>View Exercises</button>
        <button>Build Your Workout</button>
      </main>

      <footer>
        <button>WORKOUT FOR BEGINNERS</button>
        <button> IMPROVE YOUR ENDURANCE</button>
        <button>15 MINUTES WORKOUTS</button>
        <button>CARDIO</button>
      </footer>
    </div>
  );
};

export default Home;
