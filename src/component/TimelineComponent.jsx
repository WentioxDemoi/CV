import { CheckIcon } from '@heroicons/react/20/solid'
import QRcode from '../Assets/Qrcode.png'
import { Reveal } from './Reveal.tsx';
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import MailComponent from './MailComponent.jsx'

const includedFeaturesEpitech = [
    'Compétences techniques solides',
    'Expérience pratique',
    'Adaptabilité',
    'Esprit d\'équipe',
]

export default function Projets() {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const ref7 = useRef(null)
    const ref8 = useRef(null)
    const ref9 = useRef(null)

    let x;
    let y;

    if (isMobile) {
        x = "0 2";
        y = "1 1.9"
    } else {
        x = "0 1";
        y = "1.33 1"
    }

    const { scrollYProgress: scrollYProgress1 } = useScroll({ target: ref1, offset: [x, y], });
    const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref2, offset: [x, y], });
    const { scrollYProgress: scrollYProgress3 } = useScroll({ target: ref3, offset: [x, y], });
    const { scrollYProgress: scrollYProgress4 } = useScroll({ target: ref4, offset: [x, y], });
    const { scrollYProgress: scrollYProgress5 } = useScroll({ target: ref5, offset: [x, y], });
    const { scrollYProgress: scrollYProgress6 } = useScroll({ target: ref6, offset: [x, y], });
    const { scrollYProgress: scrollYProgress7 } = useScroll({ target: ref7, offset: [x, y], });
    const { scrollYProgress: scrollYProgress8 } = useScroll({ target: ref8, offset: [x, y], });
    const { scrollYProgress: scrollYProgress9 } = useScroll({ target: ref1, offset: [x, y], });

    const scaleProgress1 = useTransform(scrollYProgress1, [0, 1], [0.5, 1]);
    const scaleProgress2 = useTransform(scrollYProgress2, [0, 1], [0.5, 1]);
    const scaleProgress3 = useTransform(scrollYProgress3, [0, 1], [0.5, 1]);
    const scaleProgress4 = useTransform(scrollYProgress4, [0, 1], [0.5, 1]);
    const scaleProgress5 = useTransform(scrollYProgress5, [0, 1], [0.5, 1]);
    const scaleProgress6 = useTransform(scrollYProgress6, [0, 1], [0.5, 1]);
    const scaleProgress7 = useTransform(scrollYProgress7, [0, 1], [0.5, 1]);
    const scaleProgress8 = useTransform(scrollYProgress8, [0, 1], [0.5, 1]);
    const scaleProgress9 = useTransform(scrollYProgress9, [0, 1], [0.5, 1]);


    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["0 1", "1.33 1"],
    // })

    const handleClick = () => {
        const targetElement = document.querySelector('#Circle');
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 150,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div>

            <div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-xl lg:text-2xl">
                    <h2 className="text-3xl font-bold mt-40 mb-4 text-center">L'école</h2>
                    <motion.div
                        ref={ref1}
                        style={{
                            scale: scaleProgress1, //scrollYProgress1,//
                            opacity: scrollYProgress1
                        }}
                        id="epitech"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <Reveal>
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">C'est quoi Epitech ?</h3>
                                </Reveal>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        Epitech est une école d'excellence informatique qui propose un Programme Grande École visé par le ministère de l'Enseignement Supérieur et la Recherche.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Ce cursus de 5 ans après le Bac est accessible hors Parcoursup aux candidats de niveau Bac, sur la base d'un dossier de candidature.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        La pédagogie d'Epitech est axée sur la réalisation de projets, avec près de 80 projets prévus dans le cursus, permettant ainsi aux étudiants d'acquérir de solides compétences dans tous les domaines de l'informatique.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Depuis 25 ans, Epitech forme des experts en informatique qui contribuent à façonner le monde de demain dans le secteur de la tech.
                                    </p>
                                </Reveal>
                                <div className="mt-10 flex items-center gap-x-4">
                                    <h4 className="flex-none text-sm font-semibold leading-6 text-gray-600">Les points forts</h4>
                                    <div className="h-px flex-auto bg-gray-100" />
                                </div>
                                <ul
                                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                                >
                                    {includedFeaturesEpitech.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon className="h-6 w-5 flex-none text-blue-700" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0 flex-none">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:item-center lg:justify-center lg:py-16 h-full flex items-center">
                                    <div className="mx-auto max-w-xs px-8">
                                        <a
                                            href="https://www.epitech.eu/programme-grande-ecole-informatique/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            En savoir +
                                        </a>
                                        <button
                                            onClick={handleClick}
                                            className="mt-5 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Timeline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref2}
                        style={{
                            scale: scaleProgress2,
                            opacity: scrollYProgress2
                        }}
                        id="unical"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Unical | Erasmus</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        Lors de la 4ème année à Epitech, tout étudiant dans le programme grandes écoles doit effectuer une année complète à l’étranger.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        J’ai choisi d’effectuer une année Erasmus en Calabre, dans le sud de l’Italie, dans "L'Università della Calabria (UNICAL)".
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        J’ai donc intégré le département ingénieur de l’université avec le cursus IOT où tous les cours sont donnés en anglais.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Cette année m’a permis de m’ouvrir au monde, en rencontrant beaucoup de nationalités différentes.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        En effet, le campus accueille en cette année 2023-2024 environ 30 000 étudiants dont 1 000 étudiants étrangers.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        J'y ai donc développé, tout au long de l'année, mon anglais ainsi que mes connaissances en IOT.
                                    </p>
                                </Reveal>

                            </div>
                            <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0 flex-none">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:item-center lg:justify-center lg:py-16 h-full flex items-center">
                                    <div className="mx-auto max-w-xs px-8">
                                        <a
                                            href="https://www.unical.it"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            En savoir +
                                        </a>
                                        <button
                                            onClick={handleClick}
                                            className="mt-5 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Timeline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <h2 className="text-3xl font-bold mt-40 mb-4 text-center">Les stages</h2>
                    <motion.div
                        ref={ref3}
                        style={{
                            scale: scaleProgress3,
                            opacity: scrollYProgress3
                        }}
                        id="stagepapa"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-autoo">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Les Agences de Papa | Versity</h3>
                                <h3 className='text-xl'>1 Juillet 2021 - 31 Décembre 2021 [6 mois]</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        En tant que stagiaire dans l'équipe IT tout juste créée, j'ai eu l'occasion de participer au développement de ce service.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        J'ai contribué au changement du VLAN interne de l'entreprise, à l'installation de pare-feu et à l'implémentation de la norme IEEE 802.11ac.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        J'ai fourni un inventaire matériel et logiciel, des procédures et documentations, des workflows pour le CRM de l'entreprise et des scripts visant à faciliter le travail du service.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className='mt-6 text-base leading-7 text-gray-600'>
                                        Tuteur: Bhupinder Kunwar
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className='text-base leading-7 text-gray-600'>
                                        www.linkedin.com/in/bhupinder-kunwar-6606261/
                                    </p>
                                </Reveal>
                            </div>
                            <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0 flex-none">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:item-center lg:justify-center lg:py-16 h-full flex items-center">
                                    <div className="mx-auto max-w-xs px-8">
                                        <a
                                            href="https://versity.io/fr"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            En savoir +
                                        </a>
                                        <button
                                            onClick={handleClick}
                                            className="mt-5 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Timeline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref4}
                        style={{
                            scale: scaleProgress4,
                            opacity: scrollYProgress4
                        }}
                        id="stagethales"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Thales Alenia Space</h3>
                                <h3 className='text-xl'>3 Avril 2023 - 31 Août 2023 [5 mois]</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        En tant que stagiaire au sein du département IVVQ de Thales Alenia Space, j'ai eu l'opportunité de développer un outil permettant de synthétiser les résultats des tests de pièces de satellites et de mener un stage complet, allant de la spécification au déploiement et à la formation.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Le logiciel a été développé en utilisant un mélange de C++ et de Python, compilé à l'aide de Cmake et installé à l'aide d'un script d'installation automatisé.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Il utilise un design pattern 'Service Locator', des bibliothèques open source et génère un rapport à chaque fois qu'il est utilisé pour donner aux ingénieurs une visibilité sur son exécution.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        J'ai eu l'occasion de former une équipe à l'utilisation de ce logiciel et de créer une documentation complète.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className='mt-6 text-base leading-7 text-gray-600'>
                                        Tuteur: Philippe Cam
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className='text-base leading-7 text-gray-600'>
                                        philippe.cam@thalesaleniaspace.com
                                    </p>
                                </Reveal>
                            </div>
                            <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0 flex-none">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:item-center lg:justify-center lg:py-16 h-full flex items-center">
                                    <div className="mx-auto max-w-xs px-8">
                                        <a
                                            href="https://www.thalesaleniaspace.com/fr"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            En savoir +
                                        </a>
                                        <button
                                            onClick={handleClick}
                                            className="mt-5 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Timeline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <h2 className="text-3xl font-bold mt-40 mb-4 text-center">Hackathons</h2>
                    <motion.div
                        ref={ref5}
                        style={{
                            scale: scaleProgress5,
                            opacity: scrollYProgress5
                        }}
                        id="Hackathonactin"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">ActinSpace | Première place</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        Dans ce hackathon, nous avons eu l'occasion de créer un projet jugé "original" par le jury : Space Care Taker.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Space Care Taker est une station de service spatiale capable d'effectuer des pleins de carburant, d'imprimer des pièces 3D de satellites grâce aux déchets spatiaux et de réparer des satellites.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Cette station spatiale est épaulée par de petites navettes capables de dépolluer l'espace, en ramassant les déchets pour l'imprimante 3D, d'effectuer des pleins de carburant et de réparer les satellites.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        À la suite de cette victoire, nous avons eu l'occasion de visiter les salles blanches de Thales Alenia Space avec Jean Horanieh (<a className="text-blue-500" href="https://www.linkedin.com/in/jean-horanieh-567783216/" target="_blank" rel="noreferrer">Linkedin</a>) et de parler de notre projet avec Yves Durand (<a className="text-blue-500" href="https://www.linkedin.com/in/yves-durand-5a00b075/" target="_blank" rel="noreferrer">Linkedin</a>)
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Nous avons aussi eu l'occasion d'être encadrés sur Space Care Taker par Candace Johnson (<a className="text-blue-500" href="https://www.linkedin.com/in/candace-johnson-2966054a/?originalSubdomain=fr" target="_blank" rel="noreferrer">Linkedin</a>) et Marilyn Davison (<a className="text-blue-500" href="https://www.linkedin.com/in/marilyndavison/" target="_blank" rel="noreferrer">Linkedin</a>).
                                    </p>
                                </Reveal>
                            </div>
                            <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0 flex-none">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:item-center lg:justify-center lg:py-16 h-full flex items-center">
                                    <div className="mx-auto max-w-xs px-8">
                                        <a
                                            href="https://www.petitesaffiches.fr/actualites,069/tech,080/spacecaretaker-laureat-de-la-5e,26422.html"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Article
                                        </a>
                                        <button
                                            onClick={handleClick}
                                            className="mt-5 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Timeline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref6}
                        style={{
                            scale: scaleProgress6,
                            opacity: scrollYProgress6
                        }}
                        id="Hackathonmuseo"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Muséomix | Première place, coup de coeur Nice Matin</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        Dans ce hackathon sur le thème de l'accessibilité dans les musées, nous avons eu l’occasion de nous attaquer à un gros enjeu pour les musées : les enfants.                            </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Durant les trois jours de ce hackathon, nous avons relevé plusieurs problèmes. Les enfants ne sont pas forcément assez grands pour lire les cartels, et les cartels ne sont absolument pas ludiques pour eux.                            </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Notre objectif a donc été de créer une solution simple à mettre en place pour les musées et ludique pour les enfants.                            </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Chi-plouf est alors né. Un simple QR code à scanner pour les parents, une histoire à suivre pour les enfants et la possibilité d’accéder à ces histoires de n’importe où et n’importe quand.                            </p>
                                </Reveal>
                            </div>
                            <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0 flex-none">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:item-center lg:justify-center lg:py-16 h-full flex items-center">
                                    <div className="mx-auto max-w-xs px-8">
                                        <a
                                            href="https://www.nicematin.com/culture/chiplouf-le-nouveau-petit-guide-virtuel-qui-fait-decouvrir-les-secrets-du-musee-des-arts-asiatiques-de-nice-aux-enfants-807484"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Article
                                        </a>
                                        <img src={QRcode} className="w-20 mx-4 mt-5 items-center justify-center" alt=""></img>
                                        
                                        
                                        <button
                                            onClick={handleClick}
                                            className="mt-5 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Timeline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref7}
                        style={{
                            scale: scaleProgress7,
                            opacity: scrollYProgress7
                        }}
                        id="Hackathonhack"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Hack4inclusion | Prix de l'inclusion</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        Dans ce hackathon sur le thème de l’inclusion, nous nous sommes penchés sur la question des enfants malades.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Pour les personnes ayant une maladie nécessitant une hospitalisation, nous avons fait le constat qu’il n’y avait pas grand-chose à faire à l’hôpital.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Il n’y a souvent pas de connexion ce qui rend la déconnexion inévitable pour les personnes n’ayant pas de forfait 4G.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Nous avons donc pensé à un jeu vidéo ludique pour enfant sur le thème de la programmation informatique dans le but de faire passer la maladie plus vite et dans l’espoir de créer des vocations.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        Notre jeu se déroule dans un monde imaginaire où notre joueur doit déverrouiller des quêtes grâce à des clés. Les clés sont réparties en fragments dans notre univers et le joueur doit les collecter en résolvant de petits problèmes informatiques.
                                    </p>
                                </Reveal>
                            </div>
                            <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0 flex-none">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:item-center lg:justify-center lg:py-16 h-full flex items-center">
                                    <div className="mx-auto max-w-xs px-8">
                                        <a
                                            href="https://what06.fr/hackathon-inclusion-2023/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            En savoir +
                                        </a>
                                        <button
                                            onClick={handleClick}
                                            className="mt-5 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Timeline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref8}
                        style={{
                            scale: scaleProgress8,
                            opacity: scrollYProgress8
                        }}
                        id="Hackathonstarton"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Starton Online</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        Pour ce hackathon basé sur la blockchain Starton, nous avons décidé d'inventer Get-In, une application pas comme les autres « walking reward apps ».                             </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Get-In vise à résoudre le problème du manque d'exercice physique chez les jeunes comme chez les adultes en proposant une plateforme moderne mettant en commun les amoureux d'un sport, sans partenaires.                            </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Notre application vise à rémunérer en « GetCoins » les personnes se mettant au sport, à connecter d'autres personnes voulant exercer ce même sport en groupe et à proposer des événements/tournois payants en termes de GetCoins.                            </p>
                                </Reveal>
                            </div>
                            <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0 flex-none">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:item-center lg:justify-center lg:py-16 h-full flex items-center">
                                    <div className="mx-auto max-w-xs px-8">
                                        <a
                                            href="https://starton.notion.site/November-Hackathon-21-22-23-24-Final-28-November-2a0f9f1db8554d789fdddcd6291d2c3f"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            En savoir +
                                        </a>
                                        <button
                                            onClick={handleClick}
                                            className="mt-5 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Timeline
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref9}
                        style={{
                            scale: scaleProgress9,
                            opacity: scrollYProgress9
                        }}
                        id="Hackathonstarton"
                    >
                        <div className="mx-auto mt-16 max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none text-lg lg:text-xl">
                            <div className="space-y-6  p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Petits ajouts </h3>
                                <Reveal>
                                    <p className="mt-6 leading-7 text-gray-600">
                                        Disponible, polyvalent et motivé, je suis à l'écoute de tout type d'opportunités dans le domaine du développement informatique.                             </p>
                                </Reveal>
                                <Reveal>
                                    <p className=" leading-7 text-gray-600">
                                        Toutes les technologies que je connais ne sont pas mentionnées, n'hésitez pas à m'envoyer un message via le formulaire ci-dessous.                            </p>
                                </Reveal>
                                <Reveal>
                                    <p className="leading-7 text-gray-600">
                                        Vous pourrez trouver quelques gros projets réalisés lors de mes études à Epitech, en cliquant sur le bouton ci-dessous.                         </p>
                                </Reveal>
                                <div className="p-2 w-full flex justify-center">
                                <a
                                            href="https://github.com/WentioxDemoi/Epitech"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Github
                                        </a>
                                        </div>
                            </div>
                        </div>
                    </motion.div>
                    <div className='mt-20'></div>
                    <div className='mt-20'></div>
                    <div className='mt-20'></div>
                    <div className='mt-20'></div>
                </div>

            </div>
        </div>



    )
}
