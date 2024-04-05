import Signature from '../Assets/Signature White.png'
import React, { useState } from 'react';

function Logo() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-10 flex justify-center items-center h-24 bg-gray-600">
        <img className="h-8 w-auto" src={Signature} alt="Logo" />
      </div>
      <div className="fixed top-24 left-0 right-0 z-30 h-20 lg:h-32 bg-gradient-to-t from-transparent via-transparent to-white text-white flex justify-center items-center"></div>
      <div className="fixed bottom-0 left-0 right-0 z-30 h-20 lg:h-32 bg-gradient-to-t from-white via-transparent to-tranparent text-white flex justify-center items-center"></div>

    </div>

  )
}

export default Logo;


