import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import JobDetail from "../pages/JobDetail/JobDetail";
import PrivateRoute from './PrivateRoute';
import JobApply from "../pages/JobApply/JobApply";

export const router=createBrowserRouter([{
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/jobs/:id',
            element:<PrivateRoute><JobDetail></JobDetail></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path:'/jobApply/:id',
            element:<PrivateRoute><JobApply></JobApply></PrivateRoute>,
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