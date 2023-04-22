import React from 'react';
import { HeaderContainer}  from './modules/Header';
import Footer from './modules/Footer';
import AppRouter from './components/AppRouter';


const App: React.FC = () => {




  return (
    <div className="App">
      <div className="wrapper">
        <HeaderContainer />
            <AppRouter />
        <Footer />
      </div>        
    </div>
  );
}

export default App;
