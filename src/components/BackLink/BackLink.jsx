import { TiArrowLeftOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import './BackLink.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link className="backlink" to={to}>
      <TiArrowLeftOutline size="20" />
      {children}
    </Link>
  );
};
