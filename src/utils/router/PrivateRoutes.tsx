import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


interface PrivateRoutesProps {
   isAuth: boolean,
   fetchStatus: string
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ isAuth, fetchStatus} ) => {


   return (
      isAuth || fetchStatus !=='error' ? <Outlet /> : <Navigate to='/login'/>
   );
}

export default PrivateRoutes;