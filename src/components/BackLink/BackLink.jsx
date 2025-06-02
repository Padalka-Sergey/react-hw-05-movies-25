import { TiArrowLeftOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import css from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link className={css.backlink} to={to}>
      <TiArrowLeftOutline size="20" />
      {children}
    </Link>
  );
};
