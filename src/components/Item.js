import React, { useState } from 'react';
import '../index.css';

export default function Item({ increment, nombre, descripcion, itemStock }) {
  const [stock, setStock] = useState(itemStock);

  const buy = () => {
    setStock(stock - 1);
    increment();
  };

  const hasProductStock = stock < 1;

  return (
    <div className='producto'>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>
        En stock:
        <span className={hasProductStock ? 'active' : undefined}>
          {hasProductStock ? 'agotado' : stock}
        </span>
      </h5>
      <button
        disabled={stock < 1}
        onClick={() => {
          buy();
        }}
      >
        {stock <= 0 ? 'sin stock' : 'comprar'}
      </button>
    </div>
  );
}
