// src/App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import Header from './Header.tsx';


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
       {/* <Home />*/}
      </main>
      {/*<Footer />*/}
    </div>
  );
};

export default App;
