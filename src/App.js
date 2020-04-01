import React from 'react';
import Cart from './simplecontext/Cart';
import Person from './proptypes/Person';

function App() {
  return (
    <div style={{width:'300px', margin:'0 auto'}}>
      <Cart />
      <Person name='Petya'/>
    </div>
  );
}

export default App;
