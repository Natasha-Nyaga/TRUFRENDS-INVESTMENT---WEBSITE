// src/App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import Header from './Header.tsx';
import Hero from './Hero.tsx';
import MyFooter from './Footer.tsx';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />    
      <main>
       
       {/* <Home />*/}
      </main>
      <MyFooter/>
    </div>
  );
};

export default App;
