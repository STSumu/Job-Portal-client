import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

export const router=createBrowserRouter([{
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'register',
            element:<Register></Register>,
        },{
            path:'signIn',
            element:<Login></Login>
        }
    ]
}])