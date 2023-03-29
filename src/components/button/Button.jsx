import React from 'react';
import './button.scss';

function Button({ text }) {
   return (
      <button className='button px-3 py-1'>{text}</button>
   )
}

export default Button