import React, { useState } from 'react';
import pizza from '../../Images/pizza.jpg';
import Swal from 'sweetalert2';

export const ProductDetail = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className='card text-dark' style={{ width: '30rem' }}>
      <img src={pizza} className='card-img-top' alt='pizza' />
      <div className='card-body'>
        <h2 className='card-title text-dark'>Nombre del producto</h2>
        <h6 class='card-subtitle mb-2 text-muted text-dark'>Codigo SKU</h6>
        <h6 class='card-subtitle mb-2 text-muted text-dark'>Precio Producto</h6>
        <div>
          <h6 className='text-dark'>Cantidad de producto</h6>
          <label className='text-dark'> La cantidad actual es: {counter}</label>
        </div>
        <div
          className='mt-2'
          style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className='btn btn-primary mx-2'
            onClick={() => {
              counter > 1 && setCounter(counter - 1);
            }}>
            -1
          </button>
          <button
            className='btn btn-primary mx-2'
            onClick={() => setCounter(counter + 1)}>
            +1
          </button>
        </div>
        <div
          className='mt-2'
          style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className='btn btn-outline-primary'
            onClick={() => {
              Swal.fire('El producto ha sido añadido exitosamente.');
            }}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
