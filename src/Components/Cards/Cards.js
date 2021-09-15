import React from 'react';
import { Link } from 'react-router-dom';
import pizza from '../../Images/pizza.jpg';

export const Cards = ({ linkto = '/', name, address, image }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={image} className='card-img-top' alt='Imagen de la tienda' />
      <div className='card-body'>
        <h5 className='card-title text-dark'>{name}</h5>
        <p className='card-text text-dark'>{address}</p>
        <Link to={linkto} className='btn btn-primary'>
          Ir a la tienda
        </Link>
      </div>
    </div>
  );
};
