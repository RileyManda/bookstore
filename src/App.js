import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/categories',
    element: <div>Hello world!</div>,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
