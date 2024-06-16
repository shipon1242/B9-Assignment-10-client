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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5001/crafts')
      },
      {
        path:"/allCraftItems",
        element:<AllCraftItems></AllCraftItems>
      },
      {
        path:"/addCraftItems",
        element:<AddCraftItems></AddCraftItems>
      },
      {
        path:"/myCraftList",
        element:<MyCraftList></MyCraftList>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/crafts/viewDetails/:id",
        element:<ViewDetails></ViewDetails>,
        loader:({params})=>fetch(`http://localhost:5001/crafts/${params.id}`)
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
