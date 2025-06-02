import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const setClass = ({ isActive }) => (isActive ? css.active : css.navLink);

  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={setClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={setClass}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
