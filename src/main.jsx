import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import {QueryClient,QueryClientProvider} from 'react-query'
import Detail from './Detail';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Outlet />,
    children:[
      {
        path:"detail",
        element:<Detail/>
      }
    ]
  }
])

const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
