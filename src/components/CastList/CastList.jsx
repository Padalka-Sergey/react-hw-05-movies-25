import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'services/fetch-api';
import { CastItem } from 'components/CastItem/CastItem';
import './CastList.css';

const CastList = () => {
  const { id } = useParams();
  const [dataCast, setDataCast] = useState(null);
  useEffect(() => {
    getMovieCast(id)
      .then(res => {
        setDataCast(res);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (dataCast) {
    return (
      <section>
        <ul className="ul-cast">
          {dataCast.cast.map(person => {
            return <CastItem key={person.id} person={person} />;
          })}
        </ul>
      </section>
    );
  }
};

export default CastList;
