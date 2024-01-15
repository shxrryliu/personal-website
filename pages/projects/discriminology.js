import '../../tailwind.config'


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className='sm:flex sm:flex-row max-w-3xl mt-24'>
                <div className='sm:w-3/5 p-3 sm:mt-10'>
                    <h1 className="text-3xl font-bold leading-tight text-gray-900">
                        Discriminology Community Data Platform
                    </h1>
                    <p className="mt-3 text-sm text-gray-500">
                        A community data platform that democratizes education data for Black and Brown student communities.
                    </p>
                </div>
                <div className="sm:w-1/2 grid grid-cols-2 gap-1 sm:gap-2 mb-4 sm:mb-0">
                    <img src="/projects/discriminology/home.png" alt="home page" className="h-80 shadow-lg rounded-3xl overflow-hidden" />
                    <img src="/projects/discriminology/reports.png" alt="Screenshot 2" className="h-80 shadow-lg rounded-3xl overflow-hidden" />
                </div>
            </div>
            <div className='max-w-3xl bg-gray-200 w-full shadow-lg rounded-lg md:mx-auto mx-3 sm:-mt-20 z-0'>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-lg">
                    <div className="p-4">
                        <p className="text-sm font-semibold text-gray-700">skills</p>
                        <p className="text-sm text-gray-600">ux research, product design</p>
                    </div>
                    <div className="p-4">
                        <p className="text-sm font-semibold text-gray-700">role</p>
                        <p className="text-sm text-gray-600">design lead</p>
                    </div>
                    <div className="p-4">
                        <p className="text-sm font-semibold text-gray-700">year</p>
                        <p className="text-sm text-gray-600">2022</p>
                    </div>
                </div>
            </div>

            {/* upper section */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:mt-12 mt-8'>
                <h3 className='pb-4 text-xl font-medium text-gray-800'>a partner project between Discriminology and Harvard Tech for Social Good</h3>
                <p className='text-gray-700 pb-4'>
                    A team from Harvard Tech for Social Good was put together to help Discriminology build a new mobile platform.
                </p>
                <p className='text-gray-700'>
                    I was the <a className='text-red-700'>Senior Designer</a> with a team of 4 designers. Our process consisted of:
                    <ul className="list-disc list-inside mx-6">
                        <li className='my-1'>7 focus group interviews</li>
                        <li className='mb-1'>Affinity mapping and identifying pain points</li>
                        <li className='mb-1'>Feature lists and feature flows</li>
                        <li className='mb-1'>Midpoint feedback session with the founders</li>
                        <li className='mb-1'>Low fidelity prototypes</li>
                        <li className='mb-1'>Usability tests</li>
                        <li className='mb-1'>High-fidelity prototypes and Final Design Report</li>
                    </ul>
                </p>
                <h3 className='pt-10 pb-4 text-xl font-medium text-gray-800'>the problem statement</h3>
                <p className='text-gray-700 pb-4'>
                    In developing a mobile application that democratizes education data for communities of color,
                    Discriminiology found that community organizers prefer
                    <a className='text-red-700'> qualitative narratives to quantitative data</a>, and that personal narratives are often necessary to provide <a className='text-red-700'>context</a> to numerical data.
                </p>
                <p className='text-gray-700 pb-2 mx-5 sm:mx-20 italic'>
                    “Reports and suspensions have little-to-no context, which makes it very difficult to identify issues within
                    school districts with respect to expulsions, suspensions, and other disciplinary action.”
                </p>
                <p className='text-gray-700 pb-4 mx-5 sm:mx-20 text-right italic'>
                    — Robb King, Discriminology</p>

                <p className='text-gray-700 pb-4'>
                    Our research and design aimed to solve a key problem statement:
                </p>
                <p className='text-gray-800 pb-4 font-semibold'>
                    How can we design an accessible, user-friendly reporting tool that provides narrative context
                    alongside quantitative data in a way that is useful for community organizers?                </p>
            </div>

            {/* divider */}
            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-10 my-6 mx-auto" />
            </div>

            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:my-4'>
                <h3 className='pb-8 text-2xl font-medium text-gray-800 text-center'>Weeks 1-4: Research.</h3>
                <h3 className='pb-4 text-xl font-medium text-gray-800'>background research & focus group analysis</h3>
            </div>

        </div>
    )
}