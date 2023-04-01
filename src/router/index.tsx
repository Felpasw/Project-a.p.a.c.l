import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AboutUs from '../presentation/components/AboutUs';
import Adoption from '../presentation/pages/Adoption';
import InitialPage from '../presentation/pages/initialPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<InitialPage />} path="/" />
      <Route element={<Adoption />} path="/Adoption" />
    </>
  )
);
export default router;