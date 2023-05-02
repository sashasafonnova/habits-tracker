import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';


interface PublicRoutesProps {
   isAuth: boolean,
   fetchStatus: string
}

const PublicRoutes: React.FC<PublicRoutesProps> = ({ isAuth, fetchStatus }) => {


   return (
      isAuth && fetchStatus ==='loaded' ? <Navigate to='/account'/> : <Outlet />
   )
}

export default PublicRoutes;