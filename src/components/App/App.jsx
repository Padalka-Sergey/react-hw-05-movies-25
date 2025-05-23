import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import './App.css';

export const App = () => {
  return (
    <div>
      <div className="header-box">
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
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<h1>This page not found</h1>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
