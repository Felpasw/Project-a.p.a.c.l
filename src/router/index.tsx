import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AboutUs from '../presentation/components/AboutUs';
import Adoption from '../presentation/pages/Adoption';
import InitialPage from '../presentation/pages/initialPage';
import Donation from '../presentation/pages/Donation';
import Events from '../presentation/pages/Events';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<InitialPage />} path="/" />
      <Route element={<Adoption />} path="/Adoption" />
      <Route element={<Donation />} path="/Donation" />
      <Route element={<Events />} path="/Events" />
    </>
  )
);
export default router;