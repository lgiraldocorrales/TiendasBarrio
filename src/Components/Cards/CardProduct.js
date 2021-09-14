import React from 'react';
import pizza from '../../Images/pizza.jpg';
import { Link } from 'react-router-dom';

export const CardProduct = ({linkto}) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={pizza} className='card-img-top' alt='Imagen de la tienda' />
      <div className='card-body'>
        <h5 className='card-title text-dark'>Product X</h5>
        <p className='card-text text-dark'>Product X</p>
        <Link to={linkto} className='btn btn-primary'>
          Go to the store
        </Link>
      </div>
    </div>
  );
};
