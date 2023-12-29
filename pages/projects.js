import '../tailwind.config'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            {/* intro */}
            <h2 className="text-3xl font-semibold text-center mt-32">Projects.</h2>
            <p className='text-med font-medium text-center pt-3 pb-10'>some of my work that i've particularly enjoyed.</p>

            {/* product design */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 my-4'>
                <h3 className='text-xl pb-4 text-gray-800'>product design</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-16 gap-4'>
                    <div className='w-full h-64 bg-gray-300 rounded-lg'></div>
                    <div className='w-full h-64 bg-gray-300 rounded-lg'></div>
                </div>
            </div>
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 my-4'>
                <h3 className='text-xl pb-4 text-gray-800'>quantitative sociology reports</h3>
            </div>
        </div>
    )
}