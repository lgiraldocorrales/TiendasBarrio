import React from 'react';
import { Link } from 'react-router-dom';
import pizza from '../../Images/pizza.jpg';

export const Cards = ({ linkto = '/' }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={pizza} className='card-img-top' alt='Imagen de la tienda' />
      <div className='card-body'>
        <h5 className='card-title text-dark'>Store X</h5>
        <p className='card-text text-dark'>Store X</p>
        <Link to={linkto} className='btn btn-primary'>
          Go to the store
        </Link>
      </div>
    </div>
  );
};
