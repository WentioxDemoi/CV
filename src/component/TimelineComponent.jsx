import { CheckIcon } from '@heroicons/react/20/solid'
import QRcode from '../Assets/Qrcode.png'
import { Reveal } from './Reveal.tsx';
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import MailComponent from './MailComponent.jsx'

const includedFeaturesEpitech = [
    'Strong technical skills',
    'Hands-on experience',
    'Adaptability',
    'Team spirit',
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
    const ref10 = useRef(null)

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
    const { scrollYProgress: scrollYProgress9 } = useScroll({ target: ref9, offset: [x, y], });
    const { scrollYProgress: scrollYProgress10 } = useScroll({ target: ref10, offset: [x, y], });

    const scaleProgress1 = useTransform(scrollYProgress1, [0, 1], [0.5, 1]);
    const scaleProgress2 = useTransform(scrollYProgress2, [0, 1], [0.5, 1]);
    const scaleProgress3 = useTransform(scrollYProgress3, [0, 1], [0.5, 1]);
    const scaleProgress4 = useTransform(scrollYProgress4, [0, 1], [0.5, 1]);
    const scaleProgress5 = useTransform(scrollYProgress5, [0, 1], [0.5, 1]);
    const scaleProgress6 = useTransform(scrollYProgress6, [0, 1], [0.5, 1]);
    const scaleProgress7 = useTransform(scrollYProgress7, [0, 1], [0.5, 1]);
    const scaleProgress8 = useTransform(scrollYProgress8, [0, 1], [0.5, 1]);
    const scaleProgress9 = useTransform(scrollYProgress9, [0, 1], [0.5, 1]);
    const scaleProgress10 = useTransform(scrollYProgress10, [0, 1], [0.5, 1]);


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
                    <h2 className="text-3xl font-bold mt-40 mb-4 text-center">The School</h2>
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
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">What is Epitech?</h3>
                                </Reveal>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        Epitech is a top computer science school offering a Grande École Program recognized by the Ministry of Higher Education and Research.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        This 5-year program after high school is accessible outside Parcoursup to candidates with a high school diploma, based on an application file.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Epitech's teaching is project-based, with nearly 80 projects planned in the curriculum, allowing students to acquire strong skills in all areas of computer science.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        For 25 years, Epitech has been training IT experts who help shape the world of tomorrow in the tech sector.
                                    </p>
                                </Reveal>
                                <div className="mt-10 flex items-center gap-x-4">
                                    <h4 className="flex-none text-sm font-semibold leading-6 text-gray-600">Key strengths</h4>
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
                                            Learn more
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
                                        During the 4th year at Epitech, every student in the Grande École program must spend a full year abroad.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        I chose to do an Erasmus year in Calabria, southern Italy, at "L'Università della Calabria (UNICAL)".
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        I joined the university's engineering department in the IoT curriculum, where all courses are taught in English.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        This year allowed me to open up to the world, meeting many different nationalities.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        In 2023-2024, the campus hosts about 30,000 students, including 1,000 international students.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Throughout the year, I developed my English and my knowledge in IoT.
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
                                            Learn more
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
                    <h2 className="text-3xl font-bold mt-40 mb-4 text-center">Internships</h2>
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
                                <h3 className='text-xl'>July 1, 2021 - December 31, 2021 [6 months]</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        As an intern in the newly created IT team, I had the opportunity to participate in the development of this service.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        I contributed to changing the company's internal VLAN, installing firewalls, and implementing the IEEE 802.11ac standard.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        I provided hardware and software inventory, procedures and documentation, workflows for the company's CRM, and scripts to facilitate the team's work.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className='mt-6 text-base leading-7 text-gray-600'>
                                        Supervisor: Bhupinder Kunwar
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
                                            Learn more
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
                                <h3 className='text-xl'>April 3, 2023 - August 31, 2023 [5 months]</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        As an intern in the IVVQ department at Thales Alenia Space, I had the opportunity to develop a tool to synthesize the results of satellite parts tests and to carry out a complete internship, from specification to deployment and training.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        The software was developed using a mix of C++ and Python, compiled with CMake, and installed using an automated installation script.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        It uses a 'Service Locator' design pattern, open source libraries, and generates a report each time it is used to give engineers visibility on its execution.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        I had the opportunity to train a team on how to use this software and to create complete documentation.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className='mt-6 text-base leading-7 text-gray-600'>
                                        Supervisor: Philippe Cam
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
                                            Learn more
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
                        ref={ref5}
                        style={{
                            scale: scaleProgress5,
                            opacity: scrollYProgress5
                        }}
                        id="stagedms"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Thales DMS</h3>
                                <h3 className='text-xl'>March 3, 2025 - September 2, 2025 [6 months]</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        As an intern at Thales Underwater Systems (now DMS), I had the opportunity to develop interactive modules for both the legacy and new versions of the Learning Management System (LMS) 'This Is Sonar' (TIS), covering various aspects of underwater acoustic propagation.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        As a member of the Sonar Software Product (SSP) team, I collaborated with the GSS department on the mathematical aspects of the projects. For the legacy version of TIS, I used JavaScript, HTML, and CSS, while for the new version, I worked with ReactJS and TypeScript. I also integrated libraries such as P5JS and ThreeJS for 2D/3D visualizations, and ToneJS for acoustic simulations.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Throughout the development process, I applied various design patterns to ensure code reusability, maintainability, and scalability. I had the opportunity to train various stakeholders on the operation of the interactive modules. The project was delivered on Bitbucket with up-to-date documentation for the legacy version of TIS, and separate documentation for the new version.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className='mt-6 text-base leading-7 text-gray-600'>
                                        Supervisor: Sébastien Deries
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className='text-base leading-7 text-gray-600'>
                                        sebastien.deries@thalesgroup.com
                                    </p>
                                </Reveal>
                            </div>
                            <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0 flex-none">
                                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:item-center lg:justify-center lg:py-16 h-full flex items-center">
                                    <div className="mx-auto max-w-xs px-8">
                                        <a
                                            href="https://www.thalesgroup.com/en/global/activities/defence/underwater-systems"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Learn more
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
                        ref={ref6}
                        style={{
                            scale: scaleProgress6,
                            opacity: scrollYProgress6
                        }}
                        id="Hackathonactin"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">ActinSpace | First place</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        In this hackathon, we had the opportunity to create a project considered "original" by the jury: Space Care Taker.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Space Care Taker is a space service station capable of refueling, 3D printing satellite parts using space debris, and repairing satellites.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        This space station is supported by small shuttles capable of cleaning up space by collecting debris for the 3D printer, refueling, and repairing satellites.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        After this victory, we had the opportunity to visit the clean rooms of Thales Alenia Space with Jean Horanieh (<a className="text-blue-500" href="https://www.linkedin.com/in/jean-horanieh-567783216/" target="_blank" rel="noreferrer">Linkedin</a>) and to discuss our project with Yves Durand (<a className="text-blue-500" href="https://www.linkedin.com/in/yves-durand-5a00b075/" target="_blank" rel="noreferrer">Linkedin</a>).
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        We were also mentored on Space Care Taker by Candace Johnson (<a className="text-blue-500" href="https://www.linkedin.com/in/candace-johnson-2966054a/?originalSubdomain=fr" target="_blank" rel="noreferrer">Linkedin</a>) and Marilyn Davison (<a className="text-blue-500" href="https://www.linkedin.com/in/marilyndavison/" target="_blank" rel="noreferrer">Linkedin</a>).
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
                        ref={ref7}
                        style={{
                            scale: scaleProgress7,
                            opacity: scrollYProgress7
                        }}
                        id="Hackathonmuseo"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Muséomix | First place, Nice Matin favorite</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        In this hackathon on the theme of accessibility in museums, we tackled a major issue for museums: children.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        During the three days of this hackathon, we identified several problems. Children are not always tall enough to read the labels, and the labels are not fun for them at all.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Our goal was to create a simple solution for museums to implement and fun for children.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        Chi-plouf was born. A simple QR code for parents to scan, a story for children to follow, and the possibility to access these stories from anywhere, anytime.
                                    </p>
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
                        ref={ref8}
                        style={{
                            scale: scaleProgress8,
                            opacity: scrollYProgress8
                        }}
                        id="Hackathonhack"
                    >
                        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                            <div className="p-8 sm:p-10 lg:flex-auto">
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Hack4inclusion | Inclusion Award</h3>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        In this hackathon on the theme of inclusion, we focused on the issue of sick children.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        For people with illnesses requiring hospitalization, we found that there is not much to do in the hospital.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        There is often no connection, making disconnection inevitable for those without a 4G plan.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="text-base leading-7 text-gray-600">
                                        So we thought of a fun video game for children on the theme of computer programming to help make the illness go by faster and hopefully inspire vocations.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        Our game takes place in an imaginary world where our player must unlock quests using keys. The keys are scattered in our universe and the player must collect them by solving small computer problems.
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
                                            Learn more
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
                                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Additional notes</h3>
                                <Reveal>
                                    <p className="mt-6 leading-7 text-gray-600">
                                        Available, versatile, and motivated, I am open to any kind of opportunity in the field of software development.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className=" leading-7 text-gray-600">
                                        Not all the technologies I know are mentioned, feel free to send me a message using the form below.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <p className="leading-7 text-gray-600">
                                        You can find some major projects completed during my studies at Epitech by clicking the button below.
                                    </p>
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
