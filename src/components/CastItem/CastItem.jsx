import './CastItem.css';

export const CastItem = ({ person }) => {
  return (
    <li key={person.id} className="li-cast">
      {person.profile_path ? (
        <img
          className="img-cast"
          src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
          alt={person.name}
        />
      ) : (
        <img
          className="img-cast"
          src="https://i.pinimg.com/736x/9a/7b/0c/9a7b0cc35691903adfaf72f833c9ddac.jpg"
          alt="Joe"
        />
      )}
      <p className="text-cast">{person.name}</p>
      <p className="text-cast">Character: {person.character}</p>
    </li>
  );
};
