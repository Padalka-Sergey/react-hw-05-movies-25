import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/fetch-api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [dataReviews, setDataReviews] = useState(null);
  useEffect(() => {
    getMovieReviews(id)
      .then(res => {
        setDataReviews(res);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (dataReviews?.results.length === 0) {
    return (
      <p className={css.pReviews}> We don't have any reviews for this movie.</p>
    );
  }

  if (dataReviews) {
    return (
      <section>
        <ul className={css.ulReviews}>
          {dataReviews.results.map(res => {
            return (
              <li key={res.id}>
                <h3 className={css.h3Reviews}>Author: {res.author}</h3>
                <p>{res.content}</p>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
};

export default Reviews;
