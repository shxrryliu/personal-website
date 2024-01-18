import '../../tailwind.config'
import Link from 'next/link'


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className='sm:flex sm:flex-row max-w-3xl mt-24'>
                <div className='sm:w-3/5 p-3 sm:mt-10'>
                    <h1 className="text-3xl font-bold leading-tight text-green-800">
                        Matanataki's Digital Waste Payment Platform
                    </h1>
                    <p className="mt-3 sm:mt-6 text-sm text-gray-700">
                        A waste management mobile platform for residents in Fiji, in partnership with a UN Capital Development Fund company.
                    </p>
                </div>
                <div className="sm:w-1/2 grid grid-cols-2 gap-1 sm:gap-2 mb-4 sm:mb-0">
                    <img src="/projects/matanataki/header1.png" alt="header 1" className="h-80 shadow-lg rounded-3xl overflow-hidden mx-auto" />
                    <img src="/projects/matanataki/header2.png" alt="header 2" className="h-80 shadow-lg rounded-3xl overflow-hidden" />
                </div>
            </div>
            <div className='max-w-3xl bg-gray-200 w-full shadow-lg rounded-lg md:mx-auto mx-3 sm:-mt-20 z-0'>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-lg">
                    <div className="p-5">
                        <p className="text-sm font-semibold text-gray-700">skills</p>
                        <p className="text-sm text-gray-600">ux research, product design</p>
                    </div>
                    <div className="p-5">
                        <p className="text-sm font-semibold text-gray-700">role</p>
                        <p className="text-sm text-gray-600">ux designer</p>
                    </div>
                    <div className="p-5">
                        <p className="text-sm font-semibold text-gray-700">year</p>
                        <p className="text-sm text-gray-600">2021</p>
                    </div>
                </div>
            </div>

            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:mt-14 mt-8'>
                <h3 className='mb-4 text-xl font-medium text-green-800 italic'>whoops! you caught me</h3>
                <p className='text-gray-700 mb-4'>
                    ...this page is currently under construction :). to read more about this project (and see the content that will populate this page), check out the final design report below!
                </p>

            </div>

            {/* BIG LINK */}
            <p className='text-2xl text-gray-80 mb-8 font-medium text-center'>
                <Link
                    href='https://drive.google.com/file/d/1ch3wmaP-YPjhhnoAjWo1oKYgfI9P1Ecc/view?usp=sharing'
                    className="group relative font-medium text-green-800 hover:text-green-950 transition duration-300"
                    passHref>
                    read the final design report
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-950 transition-all duration-200 group-hover:w-full"></span>
                </Link>
            </p>
        </div>
    )
}