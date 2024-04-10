import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeaturesEpitech = [
    'Compétences techniques solides',
    'Expérience pratique',
    'Adaptabilité',
    'Esprit d\'équipe',
]

export default function projets() {
    const handleClick = (id) => {
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
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mt-40 mb-4 text-center">L'école</h2>
                    <div id="epitech" className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">C'est quoi l'Epitech ?</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Epitech est une école d'excellence informatique qui propose un Programme Grande École visé par le ministère de l'Enseignement Supérieur et la Recherche. Ce cursus de 5 ans après le Bac est accessible hors Parcoursup aux candidats de niveau Bac, sur la base d'un dossier de candidature. La pédagogie d'Epitech est axée sur la réalisation de projets, avec près de 80 projets prévus dans le cursus, permettant ainsi aux étudiants d'acquérir de solides compétences dans tous les domaines de l'informatique. Depuis 25 ans, Epitech forme des experts en informatique qui contribuent à façonner le monde de demain dans le secteur de la tech.                     </p>
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
                                        onClick={() => handleClick("Circle")}
                                        className="mt-5 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Timeline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mt-40 mb-4 text-center">Les stages</h2>
                    <div id="stagepapa" className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Les Agences de Papa / Versity</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                            En tant que stagiaire dans l'équipe IT tout juste créée, j'ai eu l'occasion de participer au développement de ce service. J'ai contribué au changement du VLAN interne de l'entreprise, à l'installation de pare-feu et à l'implémentation de la norme IEEE 802.11ac. J'ai fourni un inventaire matériel et logiciel, des procédures et documentations, des workflows pour le CRM de l'entreprise et des scripts visant à faciliter le travail du service.
                            </p>
                            <p className='mt-6 text-base leading-7 text-gray-600'>
                                Tuteur: Bhupinder Kunwar
                            </p>
                            <p className='text-base leading-7 text-gray-600'>
                                https://www.linkedin.com/in/bhupinder-kunwar-6606261/
                            </p>
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
                                        onClick={() => handleClick("Circle")}
                                        className="mt-5 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Timeline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="stagethales" className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Thales Alenia Space</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                En tant que stagiaire au sein du département IVVQ de Thales Alenia Space, j'ai eu l'opportunité de développer un outil permettant de synthétiser les résultats des tests de pièces de satellites et de mener un stage complet, allant de la spécification au déploiement et à la formation.
                            </p>
                            <p className="text-base leading-7 text-gray-600">
                                Le logiciel a été développé en utilisant un mélange de C++ et de Python, compilé à l'aide de Cmake et installé à l'aide d'un script d'installation automatisé.
                            </p>
                            <p className="text-base leading-7 text-gray-600">
                                Il utilise un design pattern 'Service Locator', des bibliothèques open source et génère un rapport à chaque fois qu'il est utilisé pour donner aux ingénieurs une visibilité sur son exécution.
                            </p>
                            <p className="text-base leading-7 text-gray-600">
                                J'ai eu l'occasion de former une équipe à l'utilisation de ce logiciel et de créer une documentation complète.
                            </p>
                            <p className='mt-6 text-base leading-7 text-gray-600'>
                                Tuteur: Philippe Cam
                            </p>
                            <p className='text-base leading-7 text-gray-600'>
                                philippe.cam@thalesaleniaspace.com
                            </p>
                        </div>
                        <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0  flex-none">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                                <div className="mx-auto max-w-xs px-8">
                                    <a
                                        href="https://www.thalesaleniaspace.com/fr"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-10 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        En savoir +
                                    </a>
                                    <button
                                        onClick={() => handleClick("Circle")}
                                        className="mt-5 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Timeline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mt-40 mb-4 text-center">Les hackathons</h2>
                </div>
            </div>
        </div>



    )
}
