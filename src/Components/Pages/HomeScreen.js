import React from 'react';
import { Cards } from '../Cards/Cards';

export const HomeScreen = () => {
  return (
    <div className='container'>
      <div class='d-flex'>
        <div className='mx-3'>
          <Cards linkto='/productStore1' isStore={true} />
        </div>
        <div className='mx-3'>
          <Cards linkto='/productStore2' isStore={true} />
        </div>
        <div className='mx-3'>
          <Cards linkto='/productStore3' isStore={true} />
        </div>
      </div>
    </div>
  );
};
