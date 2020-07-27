import React, { useState, useEffect } from "react";
import { requestApi, baseImgUrl } from "../../helpers/request";
import PropTypes from "prop-types";
import styles from "./Cast.module.css";

const Cast = ({ movieId }) => {
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    requestApi(`/movie/${movieId}/credits`).then((res) => setCredits(res.data));
  }, [movieId]);

  return (
    <>
      {credits &&
        credits.cast.map(
          (item) =>
            item.profile_path && (
              <li className={styles.castItem} key={item.id}>
                <img
                  className={styles.castImg}
                  src={baseImgUrl + item.profile_path}
                  alt={item.name}
                />
                <p>{item.name}</p>
                <p>Character: {item.character}</p>
              </li>
            )
        )}
    </>
  );
};

Cast.protoTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Cast;
