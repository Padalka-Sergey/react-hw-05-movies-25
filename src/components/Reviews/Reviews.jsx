import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/fetch-api';
import './Reviews.css';

export const Reviews = () => {
  const { id } = useParams();
  const [dataReviews, setDataReviews] = useState(null);
  useEffect(() => {
    getMovieReviews(id)
      .then(res => {
        console.log(res);
        setDataReviews(res);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (dataReviews) {
    return (
      <ul>
        {dataReviews.results.map(res => {
          return (
            <li key={res.id}>
              <h3>Author: {res.author}</h3>
              <p>{res.content}</p>
            </li>
          );
        })}
      </ul>
    );
  }
};
