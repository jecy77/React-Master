import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './AppStyled.jsx';
// import App from './AppTailwindCSS.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import './index.css';
import CanvasDetail from './pages/CanvasDetail';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'canvases/:id',
        element: <CanvasDetail />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]); // /로 접근 시 Hello world! 가 나옴
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <QueryClientProvider client={queryClient}> */}
    <RouterProvider router={router} />
    {/* </QueryClientProvider> */}
  </React.StrictMode>,
);
