import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/fetch-api';
import './Reviews.css';

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
      <p className="p-reviews"> We don't have any reviews for this movie.</p>
    );
  }

  if (dataReviews) {
    return (
      <section>
        <ul className="ul-reviews">
          {dataReviews.results.map(res => {
            return (
              <li key={res.id}>
                <h3 className="h3-reviews">Author: {res.author}</h3>
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
