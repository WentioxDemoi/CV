import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeaturesEpitech = [
    'Compétences techniques solides',
    'Expérience pratique',
    'Adaptabilité',
    'Esprit d\'équipe',
]

export default function projets() {
    const handleClick = (id) => {
        const targetElement = document.querySelector('#' + id);
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
                    <h2 className="text-xl font-bold mt-12 mb-4 text-center">L'école</h2>
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
                    <div id="stagepapa" className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Les Agences de Papa</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                En tant que stagiaire dans l'équipe IT tout juste crée, j'ai eu l'occasion de participer au développement de ce service.
                                J'ai contribué au changement du Vlan interne de l'entreprise, à l'installation de pare-feu et à l’implémentation de la norme IEEE 802.11ac.
                                J'ai fourni un inventaire matériel et logiciel, des procédures et documentations, des Workflows pour le CRM de l'entreprise et des scripts visant à facilier le travail du service.
                            </p>
                        </div>
                        <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0 flex-none">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:item-center lg:justify-center lg:py-16 h-full flex items-center">
                                <div className="mx-auto max-w-xs px-8">
                                    <a
                                        href="/"
                                        className="block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Get access
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="stagethales" className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                                repellendus etur quidem assumenda.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                                <div className="h-px flex-auto bg-gray-100" />
                            </div>
                            {/* <ul
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-blue-700" aria-hidden="true" />
                    {feature}
                    </li>
                ))}
                </ul> */}
                        </div>
                        <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0  flex-none">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                                <div className="mx-auto max-w-xs px-8">
                                    <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                    </p>
                                    <a
                                        href="/"
                                        className="mt-10 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Get access
                                    </a>
                                    <p className="mt-6 text-xs leading-5 text-gray-600">
                                        Invoices and receipts available for easy company reimbursement
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 
            <div id="stagethales" className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                repellendus etur quidem assumenda.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-blue-700" aria-hidden="true" />
                    {feature}
                    </li>
                ))}
                </ul>
            </div>
            <div className="p-2 lg:w-56 lg:max-w-md lg:flex-shrink-0  flex-none">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                    </p>
                    <a
                    href="/"
                    className="mt-10 block w-full rounded-md bg-blue-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company reimbursement
                    </p>
                </div>
                </div>
            </div>
            </div> */}
                </div>
            </div>
        </div>



    )
}
