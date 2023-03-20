import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AboutUs from '../presentation/pages/aboutUs';
import InitialPage from '../presentation/pages/initialPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<InitialPage />} path="/" />
      <Route element={<AboutUs />} path="/AboutUs" />
    </>
  )
);
export default router;