import {createBrowserRouter} from "react-router";
import Home from "../Pages/Home/Home";
import Layouts from "../Layouts/Layouts";
import DietBoxes from "../Pages/DietBoxes/DietBoxes";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Layouts></Layouts>,
            children:[
                {
                  path:'/',
                  index:true,
                  element:<Home></Home>  
                },
                {
                    path:'/diet_boxes',
                    element:<DietBoxes></DietBoxes>
                  
                }
            ]

        }
    ]
)

export default router;