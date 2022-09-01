import React, { useState } from 'react';
import './index.css';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {
  const [cantProducts, setCantProducts] = useState(0);

  const increment = () => {
    setCantProducts(cantProducts + 1);
  };

  return (
    <div className='main'>
      <Cabecera cantProducts={cantProducts} />
      <Listado increment={increment} />
    </div>
  );
}

export default App;
