import React from 'react';
import '../index.css';

import data from '../data/data.json';
import Item from './Item';

export default function Listado({ increment }) {
  return (
    <div className='container'>
      {data.map((item) => (
        <Item
          key={item.id}
          increment={increment}
          nombre={item.producto.nombre}
          descripcion={item.producto.descripcion}
          itemStock={item.stock}
        />
      ))}
    </div>
  );
}
