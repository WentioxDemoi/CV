import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion';
import github from '../Assets/Github.png'

export default function Home() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-18 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Hello World !</h2>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Je m'appel Rémi Desbordes
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:pl-[40%]">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={github}
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Si vous êtes là, c'est que vous avez cliqué sur le lien présent sur mon CV et que vous voulez en savoir plus concernant mon profil.
                </p>

                <p className="mt-6 text-xl leading-8 text-gray-700">
                  J'ai 22 ans et je suis tombé dans le chaudron de l'informatique lorsque j'étais petit
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Je fais parti de l'une des dernières générations à avoir connu les téléphones à touches et à avoir appris à coder sans IA générative de texte
                </p>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  Actuellement à la recherche d'un stage de pré-embauche, je recherche une entreprise
                </p>
                <h2 className="text-xl font-bold mt-8 mb-4 text-center">Languages</h2>
                <div className="flex flex-wrap justify-between mt-10">
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
                    <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png" alt="GitHub Logo" />
                    <p className="text-center mt-4">C</p>
                  </div>
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
                    <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png" alt="GitHub Logo" />
                    <p className="text-center mt-4">C++</p>
                  </div>
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
                    <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png" alt="GitHub Logo" />
                    <p className="text-center mt-4">C#</p>
                  </div>
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
                    <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png" alt="GitHub Logo" />
                    <p className="text-center mt-4">Python</p>
                  </div>
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
                    <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png" alt="GitHub Logo" />
                    <p className="text-center mt-4">Go</p>
                  </div>
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/3 mb-4 lg:mb-0">
                    <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png" alt="GitHub Logo" />
                    <p className="text-center mt-4">Swift</p>
                  </div>
                </div>
                <h2 className="text-xl font-bold mt-8 mb-4 text-center">Framework</h2>
                <div className="flex flex-wrap justify-between mt-10">
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/2 mb-4 lg:mb-0">
                    <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png" alt="GitHub Logo" />
                    <p className="text-center mt-4">ReactJS</p>
                  </div>
                  <div className="flex flex-col items-center w-1/2 sm:w-1/2 lg:w-1/2 mb-4 lg:mb-0">
                    <img className="h-12 w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png" alt="GitHub Logo" />
                    <p className="text-center mt-4">Tailwind CSS</p>
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
