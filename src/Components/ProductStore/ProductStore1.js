import React from 'react';
import { CardProduct } from '../Cards/CardProduct';
import pan from '../../Images/pan.jpg';
import arepa from '../../Images/arepa.jpg';
import huevo from '../../Images/huevo.jpg';
import pizza from '../../Images/pizza.jpg';
import tostada from '../../Images/tostada.jpg';
import bg from "../../Images/bg-image.png";

export const ProductStore1 = () => {
  return (
    <div className='ms-4 ' style={{ backgroundImage: `url(${bg})` }}>
      <p>Productos de Mercados Express</p>
      <section className='d-flex'>
        <div className='px-2'>
          <CardProduct name="Arepa" price="$2.999" image={arepa}/>
        </div>
        <div className='px-2'>
          <CardProduct name="Tostada" price="$4.900" image={tostada}/>
        </div>
        <div className='px-2'>
          <CardProduct name="Pan" price="$9.999" image={pan}/>
        </div>
        <div className='px-2'>
          <CardProduct name="Huevo" price="$15.999" image={huevo}/>
        </div>
        <div className='px-2'>
          <CardProduct name="Pizza" price="$30.000" image={pizza}/>
        </div>
      </section>
    </div>
  );
};
