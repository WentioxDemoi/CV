import Signature from '../Assets/Signature White.png'
import React, { useState } from 'react';

function Logo() {
  return (
    <div className="flex justify-center items-center h-24 bg-gray-800">
      <img className="h-8 w-auto" src={Signature} alt="Logo" />
    </div>
  )
}

export default Logo;

