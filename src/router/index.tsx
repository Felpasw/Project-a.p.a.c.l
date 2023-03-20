import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import InitialPage from '../presentation/pages/initialPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={< InitialPage />}
      path="/"

    />
  )
);
export default router;