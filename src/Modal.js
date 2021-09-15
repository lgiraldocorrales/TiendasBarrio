import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
//import pizza from '../../TiendasBarrio/src/Images/pizza.jpg';
import Swal from 'sweetalert2';

function Modal({ open, fclose, name, price, image}) {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <Dialog
        open={open}
        onClose={fclose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogContent>

        
    <div className='card text-dark' style={{ width: '20rem' }}>
      <img src={image} className='card-img-top' alt='pizza' />
      <div className='card-body'>
        <h2 className='card-title text-dark'>Producto: {name}</h2>
        <h6 class='card-subtitle mb-2 text-muted text-dark'>Codigo SKU: 38749</h6>
        <h6 class='card-subtitle mb-2 text-muted text-dark'>Precio Producto: {price}</h6>
        <div>
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
              fclose();
              Swal.fire(
                '¡Añadiste este producto!',
                'Ahora tienes tus productos en el carrito de compras',
                'success'
              );
              setCounter(1);
            }}>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>

        </DialogContent>
        
      </Dialog>
    </div>
  );
}

export default Modal;
