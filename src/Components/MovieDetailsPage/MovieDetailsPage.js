import React, { useState, useEffect, Suspense, lazy } from "react";
import { requestApi, baseImgUrl } from "../../helpers/request";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";
import styles from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews/Reviews"));

const MovieDetailsPage = ({ history, match }) => {
  const [movie, setMovie] = useState({});
  let movieId = match.params.id;

  useEffect(() => {
    requestApi(`/movie/${movieId}`).then((res) => setMovie(res.data));
  }, [movieId]);

  const goBack = () => {
    history.goBack();
  };

  const {
    title,
    overview,
    genres,
    vote_average,
    poster_path,
    release_date,
  } = movie;
  return (
    <>
      <section className={styles.wrapper}>
        <p className={styles.back} onClick={goBack}>
          &#8592; Go back
        </p>
        <div className={styles.infoWrapper}>
          {poster_path && <img src={baseImgUrl + poster_path} alt={title} />}
          <div>
            <h3 className={styles.infoTitle}>
              {title} ({`${release_date}`.slice(0, 4)})
            </h3>
            <p className={styles.infoContent}>
              User score: {Math.round((vote_average * 1000) / 100)} %
            </p>
            <h3 className={styles.infoTitle}>Overview</h3>
            <p className={styles.infoContent}>{overview}</p>
            <h3 className={styles.infoTitle}>Genres:</h3>
            <ul className={styles.infoGanres}>
              {genres
                ? genres.map((ganre) => (
                    <li className={styles.infoGanre} key={ganre.id}>
                      {ganre.name}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.wrapper}>
        <p className={styles.sectionName}>Additional information:</p>
        <ul className={styles.infoAdd}>
          <Link to={`/movies/${movieId}/cast`} className={styles.infoAddBtn}>
            <li>Cast</li>
          </Link>

          <Link to={`/movies/${movieId}/reviews`} className={styles.infoAddBtn}>
            <li>Reviews</li>
          </Link>
        </ul>

        <ul className={styles.castList}>
          <Suspense fallback={<p>Loading</p>}>
            <Switch>
              <Route
                path="/movies/:movieId/cast"
                render={(props) => <Cast {...props} movieId={movieId} />}
              />
              <Route
                path="/movies/:movieId/reviews"
                render={(props) => <Reviews {...props} movieId={movieId} />}
              />
            </Switch>
          </Suspense>
        </ul>
      </section>
    </>
  );
};

export default MovieDetailsPage;
