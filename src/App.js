import React from 'react';
import Nav from './components/nav';
import SBCards from './components/sbCards';
import SYCards from './components/syCards';

function App() {
 
  return ( 
    <div className="App">
     <Nav/>
     <SBCards/>
     <SYCards/>
    </div>
  );

}

export default App;
