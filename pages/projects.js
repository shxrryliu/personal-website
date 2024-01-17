import '../tailwind.config'
import Link from 'next/link';
import ProjectCard from '../components/projectcard';
import { productDesign, quantitativeSociologyReports, engineeringReports } from '../components/projectdata';
import ProjectStrip from '../components/projectstrip';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            {/* intro */}
            <h2 className="text-3xl font-semibold text-center mt-32 sm:mt-36">Projects.</h2>
            <p className='text-xs text-center pt-2 pb-10 text-gray-800'>[some of my work that i've particularly enjoyed.]</p>

            {/* product design */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:my-4'>
                <h3 className='pb-4 text-xl text-gray-800'>product design</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-16 gap-4'>
                    {productDesign.map((project, index) => (
                        <ProjectCard key={index} project={project} className="w-full h-full" imgClassName="h-44" />
                    ))}
                </div>

                {/* more projects wip! */}
                <p className='sm:text-right text-center pt-6 text-gray-600 text-xs'>
                    [more pages to come, featuring a design project called <br className='sm:block hidden'></br>
                    <a className='font-medium text-gray-700'>The Talk</a>, an inclusive sex-ed platform for LGBTQ+ youth]
                </p>
            </div>

            {/* divider */}
            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 my-6 mx-auto" />
            </div>

            {/* more t4sg projects */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:mt-4'>
                <p className='text-lg pb-4 text-gray-800'>as the <a className='font-medium'>director of product research & design</a> @ {' '}
                    <Link
                        href="https://socialgood.hcs.harvard.edu/"
                        className="group relative text-red-700 hover:text-red-900 transition duration-300"
                        passHref
                    >
                        tech for social good
                        {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span> */}
                    </Link>, i also coordinated 8 teams of 3-4 designers to research, design, and handoff impactful tech for:</p>

                <ul className="list-disc list-inside mx-6 text-gray-700">
                    <li className='mb-3'>
                        <Link href='https://www.usaid.gov/' className='text-red-700 hover:text-red-900 transition duration-300'>USAID</Link>'s disaster donation guide to optimize our national responses to natural disasters.
                    </li>
                    <li className='mb-3'>
                        <Link href='https://www.fs.usda.gov/' className='text-red-700 hover:text-red-900 transition duration-300'>USDA Forest Service</Link>'s National Asset Management Program (NAMP) to aggregate data and streamline project proposal approval for projects saving our nation's forests.
                    </li>
                    <li className='mb-3'>
                        <Link href='https://www.boston.gov/' className='text-red-700 hover:text-red-900 transition duration-300'>City of Boston</Link>'s Sportsfinder to help working parents find afterschool enrichment activities for K-12 kids, simultaneously reducing the cost of childcare.
                    </li>

                    <li className='mb-3'>
                        <Link href='https://www.hamiltonfamilies.org/' className='text-red-700 hover:text-red-900 transition duration-300'>Hamilton Families</Link>
                        , San Francisco's leading service provider to families experiencing homelessness.
                    </li>                    <li className='mb-2'>
                        <Link href='https://poverty-action.org/' className='text-red-700 hover:text-red-900 transition duration-300'>Innovations for Poverty Action</Link>, a research organization dedicated to improving the lives of people living in poverty.
                    </li>
                    <li className='mb-3'>
                        <Link href='https://healthinharmony.org/' className='text-red-700 hover:text-red-900 transition duration-300'>Health in Harmony</Link>, an international nonprofit dedicated to reversing global heating by collaborating with rainforest communities.
                    </li>
                    <li className='mb-3'>
                        <Link href='https://rfcx.org/' className='text-red-700 hover:text-red-900 transition duration-300'>Rainforest Connection</Link>
                        , a nonprofit focused on preventing deforestation, where we enhanced the user experience of their scientific tools.
                    </li>                </ul>

                <p className='text-lg pb-4 text-gray-80 mt-8 font-medium text-center'>
                    <Link
                        href='https://drive.google.com/drive/folders/1NQttAiSYES-7Qi1fE6_oK8PAjN9MAuG2?usp=sharing'
                        className="group relative text-red-700 hover:text-red-900 transition duration-300"
                        passHref>
                        read the final design reports
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                    </p>
            </div>


            {/* divider */}
            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 my-6 mx-auto" />
            </div>


            {/* quantitative soc reports */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 mt-4'>
                <h3 className='text-xl pb-4 text-gray-800'>quantitative sociology reports</h3>
                <div className="flex flex-col gap-4">
                    {quantitativeSociologyReports.map((project, index) => (
                        <ProjectStrip key={index} project={project} />
                    ))}
                </div>
            </div>

            {/* divider */}
            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 my-6 mx-auto" />
            </div>

            {/* engineering reports */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:my-4'>
                <h3 className='text-xl pb-4 text-gray-800'>engineering reports</h3>
                <div className="flex flex-col gap-4">
                    {engineeringReports.map((project, index) => (
                        <ProjectStrip key={index} project={project} />
                    ))}
                </div>
            </div>


            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:mt-4'>
                <p className='text-lg pb-4 text-gray-500 text-right'>...more to come in 2024 :)</p>
            </div>

        </div>
    )
}