import React, { useState, useEffect } from "react";
import { requestApi } from "../../helpers/request";
import PropTypes from "prop-types";
import styles from "./Reviews.module.css";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    requestApi(`/movie/${movieId}/reviews`).then((res) =>
      setReviews(res.data.results)
    );
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        reviews.map((item) => (
          <li className={styles.reviewItem} key={item.id}>
            <p className={styles.reviewAuthor}>Author: {item.author}</p>
            <p className={styles.reviewContent}>{item.content}</p>
          </li>
        ))
      ) : (
        <p className={styles.notFoundMess}>
          We dont have any reviews for this movie
        </p>
      )}
    </>
  );
};

Reviews.protoTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Reviews;
