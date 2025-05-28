import { Routes, Route } from 'react-router-dom';
import { CastList } from 'components/CastList/CastList';
import { Reviews } from 'components/Reviews/Reviews';
import { NotFound } from 'components/NotFound/NotFound';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import SomeMovie from 'pages/SomeMovie/SomeMovie';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<SomeMovie />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
