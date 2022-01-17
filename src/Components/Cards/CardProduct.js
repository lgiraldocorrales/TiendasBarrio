import pizza from '../../Images/pizza.jpg';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';
import React, { useState } from "react";

export const CardProduct = ({linkto, name, price, image, id}) => {
  const [open, setOpen] = useState(false);
  const fclose = () => {
    setOpen(false);
  }
  return (
    <div className='card' style={{ width: '15rem', minHeight: '25rem'}}>
      <img src={image} className='card-img-top' alt='Imagen de la tienda' style={{ minHeight: '15rem'}} />
      <div className='card-body'>
        <h5 className='card-title text-dark'>{name}</h5>
        <p className='card-text text-dark'>{price}</p>
        <button onClick={(e) => {setOpen(true)}} className='btn btn-primary'>
          Detalle del producto
        </button>
        <Modal open={open} fclose={fclose} name={name} price={price} image={image} id={id}></Modal>
      </div>
    </div>
  );
};
