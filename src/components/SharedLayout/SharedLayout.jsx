import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import './SharedLayout.css';

export const SharedLayout = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/movies" className="nav-link">
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
