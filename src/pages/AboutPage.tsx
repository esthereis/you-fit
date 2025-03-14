import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.svgArea}>
        <img
          src="../src/assets/about-project.svg"
          alt="About the Project svg"
          className={styles.circleText}
        />
        <img
          src="../src/assets/check-icon.svg"
          alt="Check icon"
          className={styles.checkIcon}
        />
      </div>

      <div className={styles.textArea}>
        <h3> DESIGNED TO </h3>
        <p>
          help you create personalized workout plans tailored to your specific
          fitness goals.
        </p>
        <h3>OUR MISSION IS</h3>
        <p>
          to make fitness more accessible and motivating for everyone, whether
          you're looking to lose weight, build muscle, or improve endurance.
        </p>
        <h3>WE PROVIDE</h3>
        <p>
          an easy-to-use platform where you can choose your goal, browse through
          a variety of exercises, and customize your workout by adjusting sets,
          reps, and rest periods.
        </p>
        <h3>START TRAINING</h3>
        <p>
          in a way that is uniquely suited to you and track your progress over
          time!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
