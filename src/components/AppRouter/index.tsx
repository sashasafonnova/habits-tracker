import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux-hooks";
import { privateRoutes } from '../../helpers/routes/private';
import { publicRoutes } from '../../helpers/routes/public';



const AppRouter: React.FC = () => {

   const isAuth = useAppSelector(state => state.authSlice.isAuth);

   
   return isAuth ? (
      <Routes>
         {privateRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} /> )}
         
      </Routes>
      ) : (
      <Routes>
            {publicRoutes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
      </Routes>
      )
}

export default AppRouter; 



