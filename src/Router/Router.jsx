import {createBrowserRouter} from "react-router";
import Home from "../Pages/Home/Home";
import Layouts from "../Layouts/Layouts";
import DietBoxes from "../Pages/DietBoxes/DietBoxes";
import Works from "../Components/Works/Works";
import WhyUS from "../Components/WhyUs/WhyUS";
import DietDetails from "../Pages/DietDetails/DietDetails";
import NotFound from "../Pages/404Page/NotFound";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";
import Profile from "../Pages/Profile/Profile";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Layouts></Layouts>,
            children:[
                {
                  
                  index:true,
                  element:<Home></Home>  
                },
                {
                    path:'diet_boxes',
                    element:<DietBoxes></DietBoxes>
                  
                },
                {
                    path:'diet_boxes/:id',
                    element:<PrivateRoute>
                        <DietDetails></DietDetails>

                    </PrivateRoute>
                },
                {
                    path:'works',
                    element:<Works></Works>
                },
                {
                    path:'why_us',
                    element:<WhyUS></WhyUS>
                },
                {
                    path:"/profile",
                    element:<PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>}
               
            ]
            
        },
        {
            path:"/auth",
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>
                },
                

            ]
        },
         {
            path:"*",
            element:<NotFound></NotFound>
        }
       
    ]
)

export default router;