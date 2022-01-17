import React from 'react';
import { CardProduct } from '../Cards/CardProduct';
import ax from '../../Images/axion.jpg';
import fabu from '../../Images/fabuloso.jpg';
import fab from '../../Images/fab.jpg';
import rey from '../../Images/rey.jpg';
import dove from '../../Images/dove.jpg';
import bg from "../../Images/bg-image.png";

export const ProductStore3 = () => {
  return (
    <div className='ms-4 ' style={{ backgroundImage: `url(${bg})` }}>
      <p>Productos de la Mercaderia Stw</p>
      <section className='d-flex'>
        <div className='px-2'>
          <CardProduct name="Jabón Axión" price="$5.999" image={ax} id="st3-p1"/>
        </div>
        <div className='px-2'>
          <CardProduct name="Jabón Fab" price="$8.900" image={fabu} id="st3-p2"/>
        </div>
        <div className='px-2'>
          <CardProduct name="Fabuloso" price="$7.999" image={fab} id="st3-p3"/>
        </div>
        <div className='px-2'>
          <CardProduct name="Jabón Rey" price="$3.999" image={rey} id="st3-p4"/>
        </div>
        <div className='px-2'>
          <CardProduct name="Dove" price="$5.000" image={dove} id="st3-p5"/>
        </div>
      </section>
    </div>
  );
};
