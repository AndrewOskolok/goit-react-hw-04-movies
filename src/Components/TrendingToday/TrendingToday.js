import React from "react";
import { requestApi } from "../../helpers/request";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./TrendingToday.module.css";

const TrendingToday = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  console.log(location);

  const history = useHistory();

  useEffect(() => {
    requestApi("/trending/movie/day").then((res) =>
      setMovies(res.data.results)
    );
  }, []);

  const toUserPage = (id) => {
    history.push({
      pathname: `/movies/${id}`,
      state: { from: location.pathname },
    });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.pageName}>Trending today</h2>
      <ul>
        {movies.map((movie) => (
          <li
            key={movie.id}
            className={styles.item}
            onClick={() => toUserPage(movie.id)}
          >
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingToday;
