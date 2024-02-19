import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import DetailLayout from './DetailLayout';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Outlet />,
    children:[
      {
        path:"",
        element:<App/>
      },
      {
        path:"detail",
        element:<DetailLayout/>
      }
    ]
  }
])

const queryClient=new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>
);

