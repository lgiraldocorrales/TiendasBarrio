import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-dark text-center text-white fixed-bottom'>
      <div className='container p-4'>
          <Link className='btn btn-outline-light btn-floating m-1' to='/'>
            Inicio
          </Link>
      </div>

      <div
        className='text-center p-3'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2021 Copyright
      </div>
    </footer>
  );
};
