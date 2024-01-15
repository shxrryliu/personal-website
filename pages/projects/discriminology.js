import '../../tailwind.config'


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">

            {/* HEADER */}
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
                <h3 className='mb-4 text-xl font-medium text-gray-800'>a partner project between Discriminology and Harvard Tech for Social Good</h3>
                <p className='text-gray-700 mb-4'>
                    A team from Harvard Tech for Social Good was put together to help Discriminology build a new mobile platform.
                </p>
                <p className='text-gray-700'>
                    I was the <b>Senior Designer</b> with a team of 4 designers. Our process consisted of:
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

                {/* problem statement */}
                <h3 className='pt-10 pb-4 text-xl font-medium text-gray-800'>the problem</h3>
                <p className='text-gray-700'>
                    There is no universal platform to help students report instances of racially charged interactions in schools.
                    Police reports are disorganized, individual, and meant to help officers — not the community.
                </p>
                <p className='text-gray-700 my-4'>
                    In developing a mobile application that democratizes education data for communities of color,
                    Discriminiology found that community organizers prefer
                    <b> qualitative narratives to quantitative data</b>, and that personal narratives are often necessary to provide <b> context</b> to numerical data.
                </p>
                <p className='text-gray-700 pb-2 mx-5 sm:mx-20 italic'>
                    “Reports and suspensions have little-to-no context, which makes it very difficult to identify issues within
                    school districts with respect to expulsions, suspensions, and other disciplinary action.”
                </p>
                <p className='text-gray-700 pb-4 mx-5 sm:mx-20 text-right italic'>
                    — Robb King, Discriminology</p>

                <p className='text-gray-700 my-4'>
                    Our research and design aimed to solve a key problem statement:
                </p>
                <p className='text-gray-800 mb-4 font-semibold mx-5 sm:mx-20 bg-gray-100 p-4 rounded-md'>
                    How can we design an accessible, user-friendly reporting tool that provides narrative context
                    alongside quantitative data in a way that is useful for community organizers?
                </p>
            </div>

            {/* divider */}
            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-10 my-6 mx-auto" />
            </div>

            {/* RESEARCH */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3'>
                <h3 className='mb-8 text-2xl font-medium text-gray-800 text-center'>Weeks 1-4: Research.</h3>

                {/* user research */}
                <h3 className='mb-4 text-xl font-medium text-gray-800'>background research & focus group analysis</h3>
                <p className='text-gray-700 my-4'>
                    In the first half of our <b>12-week cycle</b>, we scoped 8 existing reporting, mapping tools,
                    and discussion platforms such as Snapchat, Google Maps, Waze, and Reddit, and reviewed
                    <b> 5 focus group recordings with 12 community leaders</b>, with analysis focused on <b> user-centered design strategies</b>.
                </p>
                <p className='text-gray-700 my-4'>
                The goal of our focus group analysis was to discover the main <b> behaviors, attitudes, pain points, and goals</b> of each user. 
                Behaviors and pain points allowed us to get a better sense of what does and does not work with the current system, 
                leading to the formulation of goals that we would try to incorporate into our new system designs.
                </p>

                <img src='/projects/discriminology/userresearch.png' alt='user research table' 
                className='self-center rounded-md shadow-md border-2 border-gray-400 p-2 mt-8 hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                
                <p className="text-center text-sm mt-2 text-gray-600 italic">We used Notion to track our insights!</p>

                {/* affinity group analysis */}
                <h3 className='mt-10 mb-4 text-xl font-medium text-gray-800'>affinity group analysis</h3>
                <p className='text-gray-700 my-4'>
                In our affinity mapping process, we synthesized those insights into a visualization of pain points and goals to guide our designs. 
                This process of analyzing qualitative data involved writing down quotes and main takeaways from our focus group analyses and categorizing them into more general pain points. 
                </p>

                <img src='/projects/discriminology/affinitymap.png' alt='affinity map' 
                className='self-center rounded-md shadow-md border-2 border-gray-400 p-2 mt-8 hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>

                <p className="text-center text-sm mt-2 text-gray-600 italic mx-20">
                After synthesizing our key findings from the focus group recordings into small sticky notes, we visually mapped them into larger categories such as “collecting data” and “sharing data w/ community”. This allowed us to identify key pain points from the community organizers’ perspectives. 
                </p>

                {/* KEY INSIGHTS */}
                <h3 className='mt-10 mb-4 text-xl font-medium text-gray-800'>key insights & pain points</h3>


            </div>

        </div>
    )
}