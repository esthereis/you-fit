import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import styles from "./Pages.module.css";

const Pages = () => {
  return (
    <div className={styles.pages}>
      <MainPage />
      <AboutPage />
      <img
        src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Woman training"
        className={styles.imageTheme}
      />
    </div>
  );
};

export default Pages;
