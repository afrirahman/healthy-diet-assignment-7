import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate,useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext);
    const location = useLocation();

    

    if(!user){
        return (
            <Navigate to="/auth/login" state={{from: location}}
            replace></Navigate>
        )
    }

    return  children;
        
           
           
        
    
};

export default PrivateRoute;