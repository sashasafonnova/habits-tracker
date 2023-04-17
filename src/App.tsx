import React from 'react';
import LoginPage from './pages/LoginPage';
import HabitsPage from './pages/HabitsPage';
import ItemPage from './pages/ItemPage';
import Header from './modules/Header';
import Footer from './modules/Footer';
import CreateHabitPage from './pages/CreateHabitPage';



const App: React.FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <LoginPage />
        <CreateHabitPage />
        <HabitsPage />
        <ItemPage />
        <Footer />
      </div>        
    </div>
  );
}

export default App;
