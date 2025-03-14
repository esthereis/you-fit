import styles from "./MainPage.module.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.marginApplied}>
        <Header />
        <Main />
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
