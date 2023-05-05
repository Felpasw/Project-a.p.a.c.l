import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Adoption from '../presentation/pages/Adoption';
import InitialPage from '../presentation/pages/initialPage';
import Contribute from '../presentation/pages/Contribute';
import Events from '../presentation/pages/Events';
import ErrorPage from '../presentation/pages/ErrorPage';
import SmartBoard from '../presentation/pages/SmartBoard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<InitialPage />} path="/" />
      <Route element={<Adoption />} path="/Adoption" />
      <Route element={<Contribute />} path="/Contribute" />
      <Route element={<Events />} path="/Events" />
      <Route element={<SmartBoard />} path="/SmartBoard" />
      <Route element={<ErrorPage />} path="*" />
    </>
  )
);
export default router;