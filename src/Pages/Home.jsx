import React from 'react';
//import { useAnimation, useInView } from 'framer-motion';
import Photo from '../Assets/Photo.jpg'
import Python from '../Assets/Python.png'
import CPP from '../Assets/C++.png'
import CSharp from '../Assets/CSharp.png'
import C from '../Assets/C.png'
import Swift from '../Assets/Swift.png'
import JavaScript from '../Assets/JavaScript.png'
import Tailwind from '../Assets/Tailwind.png'
import ReactJS from '../Assets/React.png'
import Angular from '../Assets/Angular.png'
import Spring from '../Assets/Spring.png'
import Docker from '../Assets/Docker.png'
import { Reveal } from '../component/Reveal.tsx';
//import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react';
import { Slide } from '../component/Slide.tsx'

export default function Home() {

  // const variants = {
  //   hidden: { opacity: 0, x: 150 },
  //   visible: { opacity: 1, x: 0, transition: { delay: 1.5 } }
  // };

  // const ref = useRef(null);
  //const isInView = useInView(ref, { threshold: 0.5 });


  return (
    <div>
      <div className="relative isolate overflow-hidden px-6 py-10 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="mt-28 space-y-10 lg:max-w-lg">
                <Reveal>
                  <h1 className="text-center font-bold tracking-tight text-gray-900 text-lg lg:text-xl">Hello World !</h1>
                </Reveal>
                <Reveal>
                  <p className=" text-lg lg:text-xl leading-8 text-gray-700">
                    Je m'appelle <strong><span className="font-bold">Rémi Desbordes</span></strong>
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:sticky lg:top-1/3 lg:col-start-2 lg:row-span-5 lg:row-start-1 lg:overflow-hidden lg:pl-[-5%] lg:pb-[17%]">
            <img className="flex w-[20rem] items-center justify-center max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10" src={Photo} alt="" />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="space-y-6 max-w-xl text-lg lg:text-xl text-gray-700 lg:max-w-lg">
                <Reveal>
                  <p className="leading-8 text-gray-700">
                  Étudiant en 4ème année à Epitech, j'ai choisi cette école pour sa pédagogie, les projets qu'on y mène et le métier qu'on y apprend.
                  </p>
                </Reveal>
                <Reveal>
                  <p className="leading-8 text-gray-700">
                  Après avoir découvert, dans le domaine de l'informatique, l'administration système et réseau et le développement logiciel, je suis à l'écoute de nouvelles opportunités.
                  </p>
                </Reveal>
                <Reveal>
                  <p className="leading-8 text-gray-700">
                  Je propose mes services en part-time (Lundi, Mardi et Mercredi) du 09/2024 au 03/2025, en stage de pré-embauche ou en CDI à partir du 03/2025.
                  </p>
                </Reveal>
                <Reveal>
                  <p className="leading-8 text-gray-700">
                  Vous trouverez plus d'informations ci-dessous.
                  </p>
                </Reveal>
                <h2 className="font-bold pt-12 pb-4 text-center">Languages</h2>
                <div className="flex flex-wrap justify-between mt-10">

                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10">
                    <Slide>
                      <img className="h-12 w-12 object-contain" src={C} alt="GitHub Logo" />
                      </Slide>
                      <Slide>
                      <p className="text-center mt-4">C</p>
                      </Slide>
                    
                  </div>


                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10">
                    <Slide>
                      <img className="h-12 w-12 object-contain" src={CPP} alt="GitHub Logo" />
                      </Slide>
                      <Slide>
                      <p className="text-center mt-4">C++</p>
                    </Slide>
                  </div>


                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10">
                    <Slide>
                      <img className="h-12 w-12 object-contain" src={CSharp} alt="GitHub Logo" />
                      </Slide>
                      <Slide>
                      <p className="text-center mt-4">C#</p>
                    </Slide>
                  </div>


                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10">
                    <Slide>
                      <img className="h-12 w-12 object-contain" src={Python} alt="GitHub Logo" />
                      </Slide>
                      <Slide>
                      <p className="text-center mt-4">Python</p>
                    </Slide>
                  </div>


                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10">
                    <Slide>
                      <img className="h-12 w-12 object-contain" src={JavaScript} alt="GitHub Logo" />
                      </Slide>
                      <Slide>
                      <p className="text-center mt-4">JavaScript</p>
                    </Slide>
                  </div>


                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0 mt-10">
                    <Slide>
                      <img className="h-12 w-12 object-contain" src={Swift} alt="GitHub Logo" />
                      </Slide>
                      <Slide>
                      <p className="text-center mt-4">Swift</p>
                    </Slide>
                  </div>

                </div>
                <h2 className="font-bold pt-12 pb-4 text-center">Framework</h2>

                <div className="flex flex-wrap justify-between mt-10">
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/2 mb-4 lg:mb-0 mt-10">
                    <Slide>
                      <img className="h-12 w-12 object-contain" src={ReactJS} alt="GitHub Logo" />
                      </Slide>
                      <Slide>
                      <p className="text-center mt-4">ReactJS</p>
                    </Slide>
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/2 sm:w-1/2 lg:w-1/2 mb-4 lg:mb-0 mt-10">
                    <Slide>
                      <img className="h-12 w-12 object-contain" src={Tailwind} alt="GitHub Logo" />
                    </Slide>
                    <Slide>
                      <p className="text-center mt-4">Tailwind CSS</p>
                      </Slide>
                  </div>
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/2 mb-4 lg:mb-0 mt-10">
                    <Slide>
                      <img className="h-12 w-12 object-contain" src={Spring} alt="GitHub Logo" />
                      </Slide>
                      <Slide>
                      <p className="text-center mt-4">Spring</p>
                    </Slide>
                  </div>
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/2 mb-4 lg:mb-0 mt-10">
                    <Slide>
                      <img className="h-12 w-12 object-contain" src={Angular} alt="GitHub Logo" />
                      </Slide>
                      <Slide>
                      <p className="text-center mt-4">Angular</p>
                    </Slide>
                  </div>
                </div>
                {/* <div className="flex flex-wrap justify-between mt-10">
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
                </div> */}
                <h2 className="font-bold pt-12 pb-10 text-center">DevOPS</h2>
                <div className="flex flex-wrap justify-between mt-0">
                  <div className="flex flex-col items-center justify-center w-full sm:w-full lg:w-full mb-4 lg:mb-0 mt-10">
                    <Slide>
                      <img className="h-12 w-12 object-contain" src={Docker} alt="GitHub Logo" />
                      </Slide>
                      <Slide>
                      <p className="text-center mt-4">Docker</p>
                    </Slide>
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
