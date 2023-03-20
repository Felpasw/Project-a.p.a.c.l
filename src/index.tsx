import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter, Route, RouterProvider } from 'react-router-dom';
import router from "../src/router"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
