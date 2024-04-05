import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { motion, useAnimation } from 'framer-motion';
import Photo from '../Assets/Photo.jpg'
import Python from '../Assets/Python.png'
import CPP from '../Assets/C++.png'
import CSharp from '../Assets/CSharp.png'
import C from '../Assets/C.png'
import Swift from '../Assets/Swift.png'
import Java from '../Assets/Java.png'
import Tailwind from '../Assets/Tailwind.png'
import ReactJS from '../Assets/React.png'
import Angular from '../Assets/Angular.png'
import Spring from '../Assets/Spring.png'
import Docker from '../Assets/Docker.png'
import { useInView } from "framer-motion";

export default function Home() {

  const variants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { delay: 1.5 } }
  };
  

  return (
    <div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-28 text-2xl font-bold tracking-tight text-gray-900">Hello World !</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Je m'appelle <strong><span className="font-bold">Rémi Desbordes</span></strong>
              </p>
            </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:sticky lg:top-1/3 lg:col-start-2 lg:row-span-5 lg:row-start-1 lg:overflow-hidden lg:pl-[-5%] lg:pb-[17%]">
            <img className="flex w-[20rem] items-center justify-center max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10" src={Photo} alt="" />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Si vous êtes là, c'est que vous avez cliqué sur le lien présent sur mon CV et que vous voulez en savoir plus concernant mon profil.
                </p>

                <p className="mt-6 text-xl leading-8 text-gray-700">
                BLABLAblaBLABLAblaBLA BLAblaBLABLAblaBLABLAblaBLABLAblaBLAB LAblaBLABLAblaBLABLAbla BLABLAblaBLABLAblaBLABLAbla
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  BLABLAbla BLABLAblaBLABLAblaBLABLAb laBLABLAblaBLABL AblaBLABLAblaBLABLAblaBLABLAbla BLABLAblaBLABLA blaBLABLAbla
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                BLABLAbla BLABLAblaBLABLAblaBLABLAblaBLA BLAblaBLABLAblaBLABL AblaBLABLAblaBLABLAb laBLABLAbl aBLABLAb laBLABLAbla
                </p>
                <h2 className="text-xl font-bold mt-12 mb-4 text-center">Languages</h2>
                <div className="flex flex-wrap justify-between mt-10">
      <motion.div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10" variants={variants} initial="hidden" animate="visible">
        <motion.img className="h-12 w-12 object-contain" src={C} alt="GitHub Logo" />
        <motion.p className="text-center mt-4">C</motion.p>
      </motion.div>

      <motion.div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10" variants={variants} initial="hidden" animate="visible">
        <motion.img className="h-12 w-12 object-contain" src={CPP} alt="GitHub Logo" />
        <motion.p className="text-center mt-4">C++</motion.p>
      </motion.div>

      <motion.div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10" variants={variants} initial="hidden" animate="visible">
        <motion.img className="h-12 w-12 object-contain" src={CSharp} alt="GitHub Logo" />
        <motion.p className="text-center mt-4">C#</motion.p>
      </motion.div>

      <motion.div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10" variants={variants} initial="hidden" animate="visible">
        <motion.img className="h-12 w-12 object-contain" src={Python} alt="GitHub Logo" />
        <motion.p className="text-center mt-4">Python</motion.p>
      </motion.div>

      <motion.div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10" variants={variants} initial="hidden" animate="visible">
        <motion.img className="h-12 w-12 object-contain" src={Java} alt="GitHub Logo" />
        <motion.p className="text-center mt-4">Java</motion.p>
      </motion.div>

      <motion.div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10" variants={variants} initial="hidden" animate="visible">
        <motion.img className="h-12 w-12 object-contain" src={Swift} alt="GitHub Logo" />
        <motion.p className="text-center mt-4">Swift</motion.p>
      </motion.div>
    </div>
                <h2 className="text-xl font-bold mt-12 mb-4 text-center">Framework</h2>
                <div className="flex flex-wrap justify-between mt-10">
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/2 mb-4 lg:mb-0 mt-10">
                    <img className="h-12 w-12 object-contain" src={ReactJS} alt="GitHub Logo" />
                    <p className="text-center mt-4">ReactJS</p>
                  </div>
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/2 mb-4 lg:mb-0 mt-10">
                    <img className="h-12 w-12 object-contain" src={Tailwind} alt="GitHub Logo" />
                    <p className="text-center mt-4">Tailwind CSS</p>
                  </div>
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/2 mb-4 lg:mb-0 mt-10">
                    <img className="h-12 w-12 object-contain" src={Spring} alt="GitHub Logo" />
                    <p className="text-center mt-4">Spring</p>
                  </div>
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/2 mb-4 lg:mb-0 mt-10">
                    <img className="h-12 w-12 object-contain" src={Angular} alt="GitHub Logo" />
                    <p className="text-center mt-4">Angular</p>
                  </div>
                </div>
                <h2 className="text-xl font-bold mt-12 mb-10 text-center">DevOPS</h2>
                <div className="flex flex-wrap justify-between mt-0">
                  <div className="flex flex-col items-center justify-center w-full sm:w-full lg:w-full mb-4 lg:mb-0 mt-10">
                    <img className="h-12 w-12 object-contain" src={Docker} alt="GitHub Logo" />
                    <p className="text-center mt-4">Docker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
}
