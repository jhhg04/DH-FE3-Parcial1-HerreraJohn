import React from 'react';
import '../index.css';

export default function Cabecera({ cantProducts }) {
  return (
    <div className='headComponent'>
      <h1>Carrito de compras</h1>
      <p>
        Cantidad de productos: <span>{cantProducts}</span>
      </p>
    </div>
  );
}
