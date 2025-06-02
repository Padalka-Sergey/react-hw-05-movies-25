import css from './CastItem.module.css';

export const CastItem = ({ person }) => {
  return (
    <li key={person.id} className={css.liCast}>
      {person.profile_path ? (
        <img
          className={css.imgCast}
          src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
          alt={person.name}
        />
      ) : (
        <img
          className={css.imgCast}
          src="https://i.pinimg.com/736x/9a/7b/0c/9a7b0cc35691903adfaf72f833c9ddac.jpg"
          alt="Joe"
        />
      )}
      <p className={css.textCast}>{person.name}</p>
      <p className={css.textCast}>Character: {person.character}</p>
    </li>
  );
};
