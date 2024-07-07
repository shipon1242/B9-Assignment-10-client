import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import AllCraftItems from './Components/AllCraftItems/AllCraftItems';
import AddCraftItems from './Components/AddCraftItems/AddCraftItems';
import MyCraftList from './Components/MyCraftsList/MyCraftList';
import Register from './Components/Navbar/Register';
import Login from './Components/Navbar/Login';
import AuthProvider from './Provider/AuthProvider';
import ViewDetails from './Components/Home/ViewDetails';
import MyCraftUpdateForm from './Components/MyCraftsList/MyCraftUpdateForm';
import MyCrafts from './Components/MyCraftsList/MyCrafts';
import ErrorPage from './Components/errorPage/ErrorPage';


const router = createBrowserRouter([
  {
    errorElement: <ErrorPage></ErrorPage>,
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('pottery-house-server.vercel.app/crafts')
      },
      {
        path: "/allCraftItems",
        element: <AllCraftItems></AllCraftItems>
      },
      {
        path: "/addCraftItems",
        element: <AddCraftItems></AddCraftItems>
      },
      {
        path: "/myCraftList",
        element: <MyCraftList></MyCraftList>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/crafts/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`https://pottery-house-server.vercel.app
/crafts/${params.id}`)
      },
      {
        path: "/myCrafts",
        element: <MyCrafts></MyCrafts>

      },
      {
        path: "myCrafts/update/:id",
        element: <MyCraftUpdateForm></MyCraftUpdateForm>,
        loader: ({ params }) => fetch(`https://pottery-house-server.vercel.app
/crafts/${params.id}`)
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
