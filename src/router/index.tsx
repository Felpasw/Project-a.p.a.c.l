import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AboutUs from '../presentation/components/AboutUs';
import Adoption from '../presentation/pages/Adoption';
import InitialPage from '../presentation/pages/initialPage';
import Contribute from '../presentation/pages/Contribute';
import Events from '../presentation/pages/Events';
import ErrorPage from '../presentation/pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<InitialPage />} path="/" />
      <Route element={<Adoption />} path="/Adoption" />
      <Route element={<Contribute />} path="/Contribute" />
      <Route element={<Events />} path="/Events" />
      <Route element={<ErrorPage />} path="*" />

    </>
  )
);
export default router;