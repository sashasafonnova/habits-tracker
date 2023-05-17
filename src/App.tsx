import React from 'react';
import { Routes, Route } from "react-router-dom";


import { HeaderContainer}  from './modules/Header';
import Footer from './modules/Footer';
import {  fetchStatusSelector, fetchUserIsAuth, userDataSelector } from './redux/slices/authSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks';


import CreateHabitPage from "./pages/CreateHabitPage";
import HabitsPage from "./pages/HabitsPage";
import ItemPage from "./pages/ItemPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import RegistrationPage from './pages/RegistrationPage';
import PrivateRoutes from './utils/router/PrivateRoutes';
import PublicRoutes from './utils/router/PublicRouter';
import { Loader } from './components/Loader';
import ModalNeedHelp from './modules/ModalNeedHelp';



const App: React.FC = () => {

  const [modalHelpOpen, setModalNeedOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  

  React.useEffect (() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      dispatch(fetchUserIsAuth())
    }
  }, [dispatch])



      
  const fetchStatus = useAppSelector(fetchStatusSelector);
  const userData = useAppSelector(userDataSelector);


  if (fetchStatus === 'error'){
    window.localStorage.removeItem('token')
  }
  


  return (
   
   <div className="App">
      <div className="wrapper">
        <HeaderContainer />
        <Routes>
          <Route element={<PrivateRoutes isAuth={Boolean(userData)} fetchStatus={fetchStatus}/>}>
            <Route path='/account' element={<HabitsPage />} />
            <Route path='/create' element={<CreateHabitPage />} />
            <Route path='/habits/:id' element={<ItemPage />} />
          </Route>

          <Route element={<PublicRoutes isAuth={Boolean(userData)} fetchStatus={fetchStatus}/>}>
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/registration' element={<RegistrationPage />} />
          </Route>

        </Routes>    
        <Footer setModalNeedOpen={setModalNeedOpen}/>
        {modalHelpOpen && <ModalNeedHelp setModalNeedOpen={setModalNeedOpen}/>}
        {fetchStatus === 'loading' && <Loader/>}
      </div> 

    </div>
  );
}

export default App;
