import React from 'react';
import { CardProduct } from '../Cards/CardProduct';
import mnc from '../../Images/mnc.jpg';
import doria from '../../Images/doria.jpg';
import frijol from '../../Images/frijol.jpg';
import azucar from '../../Images/azucar.jpg';
import sal from '../../Images/sal.jpg';
import bg from "../../Images/bg-image.png";

export const ProductStore2 = () => {
  return (
    <div className='ms-4 ' style={{ backgroundImage: `url(${bg})` }}>
      <p>Productos del Autoservicio el mono</p>
      <section className='d-flex'>
        <div className='px-2'>
          <CardProduct name="Spagghetti Doria" price="$7.999" image={doria} id="st2-p1"/>
        </div>
        <div className='px-2'>
          <CardProduct name="Spagghetti La Muñeca" price="$6.900" image={mnc} id="st2-p2"/>
        </div>
        <div className='px-2'>
          <CardProduct name="Azucar" price="$5.999" image={azucar} id="st2-p3"/>
        </div>
        <div className='px-2'>
          <CardProduct name="Sal" price="$3.999" image={sal} id="st2-p4"/>
        </div>
        <div className='px-2'>
          <CardProduct name="Frijol" price="$10.000" image={frijol} id="st2-p5"/>
        </div>
      </section>
    </div>
  );
};
