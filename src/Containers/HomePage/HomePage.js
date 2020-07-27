import React from "react";
import styles from "./HomePage.module.css";
import TrendingToday from "../../Components/TrendingToday/TrendingToday";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <TrendingToday />
    </div>
  );
};

export default HomePage;
