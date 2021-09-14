import React from 'react';
import { CardProduct } from '../Cards/CardProduct';

export const ProductStore2 = () => {
  return (
    <div className='ms-4 '>
      <p>productos tienda 2</p>
      <section className='d-flex'>
        <div className='px-2'>
          <CardProduct linkto='/productDetail' />
        </div>
        <div className='px-2'>
          <CardProduct linkto='/productDetail' />
        </div>
        <div className='px-2'>
          <CardProduct linkto='/productDetail' />
        </div>
        <div className='px-2'>
          <CardProduct linkto='/productDetail' />
        </div>
        <div className='px-2'>
          <CardProduct linkto='/productDetail' />
        </div>
      </section>
    </div>
  );
};
