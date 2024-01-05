import '../tailwind.config'
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

            {/* engineering reports */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:my-4'>
                <h3 className='text-xl pb-4 text-gray-800'>engineering reports</h3>
                <div className="flex flex-col gap-4">
                    {engineeringReports.map((project, index) => (
                        <ProjectStrip key={index} project={project} />
                    ))}
                </div>
            </div>

            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-6 mx-auto" />
            </div>
        </div>
    )
}