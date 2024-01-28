// src/App.tsx
import React from 'react';
import {BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import Header from './Header.tsx';
import Home from './Home.tsx';
import About from './About.tsx';

import MyFooter from './Footer.tsx';


const App: React.FC = () => {
  return (
    <Router>
    <div>
      <Header />
         
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          {/*<Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />*/}
       </Routes>
      </main>
      <MyFooter/>
    </div>
    </Router>

  );
};

export default App;
