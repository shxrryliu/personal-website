import '../../tailwind.config'
import Link from 'next/link'


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 text-gray-700">
            <div className='sm:flex sm:flex-row max-w-3xl mt-24'>
                <div className='sm:w-3/5 p-3 sm:mt-10'>
                    <h1 className="text-3xl font-bold leading-tight text-green-800">
                        Matanataki's Digital Waste Payment Platform
                    </h1>
                    <p className="mt-3 sm:mt-6 text-sm ">
                        A mobile waste management platform for residents in Fiji, funded by the UNCDF.
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
                        <p className="text-sm font-semibold ">skills</p>
                        <p className="text-sm text-gray-600">ux research, product design</p>
                    </div>
                    <div className="p-5">
                        <p className="text-sm font-semibold ">role</p>
                        <p className="text-sm text-gray-600">ux designer</p>
                    </div>
                    <div className="p-5">
                        <p className="text-sm font-semibold ">year</p>
                        <p className="text-sm text-gray-600">2021</p>
                    </div>
                </div>
            </div>

            {/* INTRO SECTION */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:mt-14 mt-8'>

                <div className='grid grid-cols-2 sm:grid-cols-4 mb-14 gap-8'>
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1 text-center'>
                        <h1 className='font-semibold text-5xl'>4</h1>
                        <p className='font-medium'>months</p>
                    </div>
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1 text-center'>
                        <h1 className='font-semibold text-5xl'>15</h1>
                        <p className='font-medium'>interviews</p>
                    </div>
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1 text-center'>
                        <h1 className='font-semibold text-5xl'>2</h1>
                        <p className='font-medium'>iterations</p>
                    </div>
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1 text-center'>
                        <h1 className='font-semibold text-5xl'>16</h1>
                        <p className='font-medium'>Figma files</p>
                    </div>
                </div>


                <h3 className='mb-4 text-xl font-medium text-green-800'>
                    a partner project between a UN Capital Development Fund company and Harvard Tech for Social Good
                </h3>
                <p className=' mb-4'>
                    A team of four was put together to collaborate with the team at Matanataki to investigate how to design a digital payment platform for Fiji citizens and businesses. Our process consisted of:
                </p>
                <ul className="list-disc list-inside mx-6">
                    <li className='my-1'>15 user interviews</li>
                    <li className='mb-1'>Affinity mapping and identifying pain points</li>
                    <li className='mb-1'>Feature lists and feature flows</li>
                    <li className='mb-1'>Developing 5 key personas</li>
                    <li className='mb-1'>Low- and High-fidelity Figma prototypes</li>
                    <li className='mb-1'>Final Design Report</li>
                </ul>


                {/* problem statement */}
                <h3 className='mt-10 sm:mt-16 pb-4 text-xl font-medium text-green-800'>the problem</h3>
                <p className='font-medium'>
                    Currently, Fiji locals lack a <b className='text-green-800'>sustainable waste management system</b>. Residents have to deal with irregular pickup schedules,
                    obscure disposal information, and cumbersome payment processes, even resorting to burning their rubbish in their backyards, thereby damaging their own health
                    and that of their environment.
                </p>
                <p className='my-4'>
                    In developing a platform that can help citizens of Fiji make more sustainable decisions about their waste management, we worked with Matanataki to create
                    an innovative platform.
                </p>
                <p className='pb-2 mx-5 sm:mx-20 italic'>
                    “[I am] not satisfied [with the current waste management system], [it is] not
                    good for the environment or people. My 65 year old mother breathes in the
                    air and it is not good for her.”
                </p>
                <p className='pb-4 mx-5 sm:mx-20 text-right italic'>
                    — User living in rural Fiji</p>

                <p className='my-4'>
                    Our research and design aimed to solve a key problem statement:
                </p>
                <p className='text-green-900 mb-4 font-medium mx-5 sm:mx-20 bg-gray-100 p-4 rounded-md shadow-md'>
                    How might we design an accessible, user-friendly digital payment platform to encourage and
                    support better solid waste management in Fiji for household and commercial users?
                </p>
            </div>

            {/* divider */}
            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-6 mx-auto" />
            </div>

            {/* RESEARCH */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3'>
                <h3 className='text-3xl font-medium text-green-800 text-center'>Weeks 1-8: Research.</h3>

                {/* user research */}
                <h3 className='mt-12 mb-4 text-xl font-medium text-green-800'>we conducted <b>15 user interviews</b> across individuals,
                    households, and businesses to identify the most salient pain points.</h3>
                <p className='my-4'>
                    Through Zoom interviews over the course of two months, we compiled information from qualitative interviews into one database. Our goal
                    was to find out what the <b className='text-green-800'>key areas of friction</b> were for residents and businesses as they tried to dispose of waste sustainably.
                </p>
                <p className=' my-4'>
                    Our research team conducted 45-minute virtual interviews over Zoom. Each interview followed an interview script of either business
                    or resident focus questions with the aim of better understanding the potential uses of our platform using open-ended questions.
                </p>

                <img src='/projects/matanataki/userdb.png' alt='user research table'
                    className='self-center rounded-md shadow-md border-2 border-gray-400 p-2 mt-8 hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>

                <p className="text-center text-sm mt-2 text-gray-600 italic">We used Notion to track our insights!</p>
                <div className='mx-5 sm:mx-20'>
                    <ul className='list-inside list-disc mt-6'> <b className='text-green-800'>example questions asked:</b>
                        <li className='my-2 italic'>Please describe how you dispose of waste at your residence/business.</li>
                        <li className='my-2 italic'>How do you pay for your current waste management process?</li>
                        <li className='my-2 italic'>How much time is spent at each step?</li>
                    </ul>
                </div>
                {/* affinity group analysis */}
                <h3 className='mt-10 sm:mt-16 mb-4 text-xl font-medium text-green-800'>affinity group analysis</h3>
                <p className=' my-4'>
                    In our affinity mapping process, we synthesized those insights into a visualization of pain points and goals to guide our designs.
                    This process of analyzing qualitative data involved writing down quotes and main takeaways from our interviews and categorizing them into more general pain points.
                    Here's what our affinity map looked like! The little circles are votes from when we prioritized pain points as a team.
                </p>

                <img src='/projects/matanataki/affmap.png' alt='affinity map'
                    className='self-center rounded-md shadow-md border-2 border-gray-400 p-2 mt-8 hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>

                <p className="text-center text-sm mt-2 text-gray-600 italic mx-2 sm:mx-20">
                    We visually mapped insights into larger categories such as “lack of sustainable education” and “cost of recycling”. This allowed us to identify key pain points from the user perspectives.
                </p>

                {/* PERSONAS */}
                {/* <h3 className='mt-10 sm:mt-16 mb-4 text-xl font-medium text-green-800'>user personas</h3> */}
                {/* <p className=' my-4'>
                    In user-centered design, personas are imaginary but realistic descriptions of our primary
                    audience to form the basis of <b className='text-green-800'>consistent design decisions</b>, and to ensure that our design
                    solutions truly address our users' needs. With the feedback of stakeholders, directors, and office
                    managers has been integrated, we focused on <b className='text-green-800'>5 personas</b>: <i>Mason the Manager, Matt the Monopoly
                        Man, Trina the Tree Hugger, Vincent the Villager, and Tracy the Tech-Savvy.</i>
                </p> */}


                {/* KEY INSIGHTS */}
                <h3 className='mt-10 sm:mt-16 mb-4 text-xl font-medium text-green-800'>key insights & pain points</h3>
                <p className=' my-4'>
                    Through our user research and affinity mapping, we categorized the information into <b className='text-green-800'>8 pain points</b>.
                    These were supported through various user interviews. As a team, we organized by the most important pain points to design a <b className='text-green-800'>minimum viable product</b>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 my-8 sm:my-10">
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-green-800">Gaps in Sustainability Education</h3>
                        <p className="text-gray-600 text-sm">
                            Interviewees consistently identified gaps in the education system as the reason for why there is a
                            lack of awareness about recycling in general in Fiji.
                        </p>
                        <p className='pb-2 mt-3 mx-2 italic text-sm'>“Everything [is just dumped] into one rubbish bin.”</p>
                    </div>
                    <div className='p-5 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-green-800">Lack of Recycling Options</h3>
                        <p className="text-gray-600 text-sm">
                            Many interviewees were willing to pay for recycling and also willing to engage in
                            recycling, but there is little to no access to a reliable recycling system.
                        </p>
                        <p className='pb-2 mt-3 mx-2 italic text-sm'>“We’d love to recycle, but there just isn’t any of that in Fiji.”</p>
                    </div>
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-green-800">Lack of Trust in the Current Waste Management System</h3>
                        <p className="text-gray-600 text-sm">
                            The system lacks <i>transparency</i> and <i>reliability</i>. Users do not feel like they can trust the current waste management system.
                        </p>
                        <p className='pb-2 mt-3 mx-2 italic text-sm'>“[Waste pickup] trucks just come when they come.”</p>
                    </div>
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-green-800">Barriers to Fee Payment</h3>
                        <p className="text-gray-600 text-sm">
                            The commute demanded from in-person payments makes waste
                            management fees difficult to pay. High costs also conflict with businesses
                            profit-seeking motives.
                        </p>
                        <p className='pb-2 mt-3 mx-2 italic text-sm'>“I would not [pay to compost] because that is not in my stakeholders’
                            interests”</p>
                    </div>
                </div>

                <p className=' mt-6'>
                    There were also a couple other general pain points users mentioned:
                </p>
                <ul className='list-disc list-inside mx-8 '>
                    <li className='my-2'>
                        <b className='text-green-800'>Damaging Personal Health</b>: The rubbish burning system widely employed in rural areas is damaging to the health of local
                        residents. This includes inhalation of carcinogens and prolonged exposure to potentially noxious
                        waste that is not immediately disposed of.
                    </li>
                    <li className='my-2'>
                        <b className='text-green-800'>Decentralization</b>: It is difficult to manage different kinds of waste because they require different waste collectors,
                        especially in different locations. Each of these differences represents a separate process for
                        users.
                    </li>
                    <li className='my-2'>
                        <b className='text-green-800'>Different Preferred Platforms</b>: Next, service providers have their own methods of communication, which individuals must adapt
                        to. Sometimes, these methods — such as email — are not ideal for efficient, quick pickups.
                    </li>
                    <li className='my-2'>
                        <b className='text-green-800'>Tracking Payment History</b>: Waste collection fees are often tracked with paper, which can be inconvenient and
                        easy to lose. It is difficult for individuals to keep good records for their payments, especially if
                        they use multiple service providers.
                    </li>
                </ul>
            </div>

            {/* divider */}
            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-6 mx-auto" />
            </div>



            {/* IDEATION */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 '>
                <h3 className='text-3xl font-medium text-green-800 text-center'>Weeks 8-12: Ideation.</h3>

                {/* ideation */}
                <h3 className='mt-10 sm:mt-14 mb-4 text-xl font-medium text-green-800'>feature ideation</h3>
                <p className='my-4'>
                    Based on these pain points, we determined the top features in our scope:
                </p>
                <ul className='list-disc list-inside mx-8 font-medium'>
                    <li className='my-2'>
                        <b className='text-green-800'>Waste Stream Dashboard</b>: On the first screens of our mobile app,
                        users will be able to see a dashboard of different waste types, such as cans, bottles, general rubbish, etc.
                    </li>
                    <li className='my-2'>
                        <b className='text-green-800'>Waste Pickup Scheduler</b>: Users can schedule pickups and filter waste types, as well as
                        add their own customizable templates for personal waste streams that they dispose often.
                    </li>
                    <li className='my-2'>
                        <b className='text-green-800'>Personal Payment History Dashboard</b>: This is the dashboard that is used to track a user's payments and
                        payment history. Users can also see if they have any outstanding fees.
                    </li>
                    <li className='my-2'>
                        <b className='text-green-800'>Impact Profile</b>: Users will be able to track their personal data with regards to their waste practices,
                        as well as edit their location and payment methods.
                    </li>
                </ul>

                {/* sprint 1 */}
                <h3 className='mt-10 sm:mt-16 mb-4 text-2xl font-medium text-green-800 text-center italic'>Sprint 1: Low Fidelity</h3>
                <p className='my-4'>
                    In our first sprint, our goal was to <b className='text-green-800'> gain maximum feedback</b> to provide future design direction.
                    To quickly generate ideas and to encourage honest feedback, we completed our designs in <b className='text-green-800'>low fidelity</b>,
                    which means they were akin to rough sketches to focus on layout rather than visual details.
                    <i> This is not our final design</i>.</p>

                {/* LOFI */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-green-800'>low fidelity prototypes for usability walkthrough</h3>
                <p className='my-4'>
                    For the <b className='text-green-800'>Waste Streams Dashboard</b>, we created an intuitive scrollable home screen that allows
                    users to pick the type of waste they would like to dispose of. Users can see educational information about
                    the type of waste that they are disposing of.
                </p>
                <p className='my-4'>
                    For the <b className='text-green-800'>Waste Pickup Scheduler</b>, we designed a straightforward flow for our users, allowing them
                    to provide the necessary customizations and information for a successful pickup.
                </p>
                <p className='my-4'>
                    The <b className='text-green-800'>Personal Payment History Dashboard</b> was designed around the idea of being able to “sort
                    by” different categories of waste payments: action, schedule type, waste type, provider, payment
                    status, order status, and schedule date — with totals over each subcategory.
                </p>
                <p className='my-4'>
                    The <b className='text-green-800'>Impact Profile</b> needed to serve two main purposes: to give users a place to set important
                    user profile-related information (name, photo, council, payment) and to view sustainability impact
                    statistics.
                </p>

                <div className='grid grid-cols-5 my-8 gap-4 sm:px-10'>
                    <div>
                        <img src='/projects/matanataki/lofi/pick.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>homepage</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/lofi/home.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>type of rubbish</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/lofi/location.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>map location selector</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/lofi/type.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>select rubbish type</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/lofi/provider.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>select service provider</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/lofi/confirmal.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>confirmation page</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/lofi/profile.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>profile page</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/lofi/stats1.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>personal stats</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/lofi/stats2.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>personal stats, more detailed</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/lofi/summaries.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>payment history summaries</p>
                    </div>
                </div>


                {/* usability testing */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-green-800'>usability testing & takeaways</h3>
                <p className='my-4'>
                    After creating our low-fidelity prototypes, we brought the prototypes to a live audience with 2 users for a <b className='text-green-800'>usability test</b>.
                    In that session, we walked through the prototype using the following interview procedure:
                </p>
                <ul className='my-6 list-inside mx-8'>
                    <li className='my-2'>1. Prime <b className='text-green-800 font-medium'>frame of mind</b> by showing and explaining the current page and available interactions.</li>
                    <li className='my-2'>2. Establish <b className='text-green-800 font-medium'>expectations</b> by asking what the user expects after an interaction.</li>
                    <li className='my-2'>3. Reveal & gauge <b className='text-green-800 font-medium'>alignment</b> with the user's expectations. Ask follow-up questions.</li>
                </ul>

                <p className='mt-8'>Our usability testing revealed the following feedback:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 my-8 sm:my-10">
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-green-800">Waste Streams Dashboard</h3>
                        <ul className='my-4 list-disc list-inside text-sm'>
                            <li className='my-2'>Reclassified and renamed the rubbish classifications to better match native usability</li>
                            <li className='my-2'>Gave users the option to see more educational content about the type of waste they are
                                disposing of to promote longer lasting waste management changes</li>
                        </ul>
                    </div>
                    <div className='p-5 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-green-800">Waste Pickup Scheduler</h3>
                        <ul className='my-4 list-disc list-inside text-sm'>
                            <li className='my-2'>Allowed users to include more information about waste pickups (additional comments, weight of waste, etc.)</li>
                            <li className='my-2'>Allowed users to choose payment methods (checks and M-PAiSA), as well as use points earned from waste drop-offs to pay for pick-ups</li>
                        </ul>
                    </div>
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-green-800">Personal Payment History Dashboard</h3>
                        <ul className='my-4 list-disc list-inside text-sm'>
                            <li className='my-2'>Adjusted “pending” payment statuses (e.g. for checks) to be more emphasized</li>
                            <li className='my-2'>Provided external links to invoices are if available (e.g. for M-PAiSA)</li>
                            <li className='my-2'>Added notifications as an additional item in the navigation bar</li>
                        </ul>
                    </div>
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-green-800">Impact Profile</h3>
                        <ul className='my-4 list-disc list-inside text-sm'>
                            <li className='my-2'>It may be more helpful for users to be able to create a post without needing to select
                                a category for users who may not be interested in reading through other posts. </li>
                            <li className='my-2'>Profile should be separate, not nested here.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-6 mx-auto" />
            </div>

            {/* FINAL DESIGN SOLUTION */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 '>
                <h3 className='text-3xl font-medium text-green-800 text-center'>Weeks 12-16: Final Design Solution.</h3>
                {/* description */}
                <p className='mt-10'>
                    <b className='font-medium'>This takes us to the final design solution, which was handed off to a dev team for development!</b> Note that
                    <b className='text-green-800'> some content will be filler</b> in this final design. This was a joint decision made with Matanataki, since
                    we are not subject-area experts in writing neutral fact-finding questions.
                </p>
                <p>
                    <br />
                    Feedback from usability testing was incorporated to refine the user flow and <b className='text-green-800'>information architecture </b>
                    was refined. We changed the information shown to match <b className='text-green-800'> user expectations</b> regarding language use (i.e. "rubbish" rather than "waste"), content shown,
                    paymend methods, and sustainability impact statistics.
                </p>

                {/* WASTE STREAMS DASHBOARD */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-green-800'>feature 1: waste streams dashboard</h3>
                <p className='my-4'>
                    In the home screen, users can see a <b className='text-green-800'> profile summary</b> with a photo, name, and current credit. There will also be a
                    scrollable dashboard of different waste types. In addition to being educational, <i> users have the new option of dropping off waste at different locations</i>, using a <b className='text-green-800'> custom QR code</b> to
                    quickly verify that the waste has been dropped off — this lowers the cost of pickups for residents and provides another way to sustainably manage waste.
                </p>
                <div className='grid grid-cols-3 gap-4 sm:px-10'>
                    <div>
                        <img src='/projects/matanataki/hifi/hfhome.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>scrollable home page</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/plastics.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>quick learn</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/lrnmore.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>detailed learning</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/dropoff1.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>location picker</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/dropoff2.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>location info</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/dropoff3.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>QR code</p>
                    </div>
                </div>

                {/* feature 2 */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-green-800'>feature 2: waste pickup scheduler</h3>
                <p className='my-4'>
                    Off of the waste streams from the dashboard, users will easily <b className='text-green-800'> schedule waste pickups</b>. Users will also be able
                    to filter these waste types, for example by the types that their city council manages, and to add their own customizable
                    templates for personal waste streams (for example, of cans and bottles together) that they find themselves needing to dispose of often.
                </p>
                <div className='grid grid-cols-3 gap-4 sm:px-10'>
                    <div>
                        <img src='/projects/matanataki/hifi/sched1.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>interactive location pickup map</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/sched2.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>waste type selection</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/sched3.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>provider selection (filler content)</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/sched4.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>time and date</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/sched5.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>confirmation page</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/sched6.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>payment page</p>
                    </div>
                </div>


                {/* feature 3 */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-green-800'>feature 3: personal payment history dashboard</h3>
                <p className='my-4'>
                    Using the personal payment history dashboard, users can see if they have any outstanding fees that need
                    to be paid to their local council. They can also see what they have paid in the past, the <b className='text-green-800'> status</b> of their payments,
                    and <b className='text-green-800'> filter</b> their <b className='text-green-800'> payment history</b> to see the kinds of payments they have made in the past. </p>
                <div className='grid grid-cols-3 gap-4 sm:px-10'>
                    <div>
                        <img src='/projects/matanataki/hifi/history1.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>view payment history by status</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/history2.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>expanded payment history details</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/history3.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>sort history by</p>
                    </div>
                </div>

                {/* heatmap and top-lvl insights */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-green-800'>feature 4: impact profile</h3>
                <p className='my-4'>
                    On this page, users will be able to track their personal data with regards to their waste practices, as well as edit their location and payment methods. We will show <b className='text-green-800'> data</b> and statistics about their <b className='text-green-800'> sustainability impact</b>. Not only does
                    this encourage users to be sustainable, but they can also share their profiles with friends, family, or to promote their business. <i> We also included the ability for multiple people to create profiles on a singular device, </i> which is important for 
                    <b className='text-green-800'> user accessibility</b>. For citizens in rural villages, allowing many households to use one device could allow for 
                    <b className='text-green-800'> greater access to waste management overall</b>.
                </p>
                <div className='grid grid-cols-3 gap-4 sm:px-10'>
                    <div>
                        <img src='/projects/matanataki/hifi/prof1.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>impact profile for Xerxes</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/prof2.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>switching profiles</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/prof3.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>editing profile location</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/prof4.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>editing payment method</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/prof5.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>Tracy's statistics</p>
                    </div>
                    <div>
                        <img src='/projects/matanataki/hifi/prof6.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>in-depth data analytics</p>
                    </div>
                </div>

                {/* lastly, */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-green-800'>finale</h3>
                <p className='my-4'>
                    Thanks for making it this far! I'd like to thank Matanataki for giving me the chance to work on an interesting
                    and high-impact project for residents in Fiji! I met so many wonderful people, users, and stakeholders, and learned 
                    a lot about the UI/UX process.
                    <b className='text-green-800 font-medium'> These designs have been handed off for development with their team (in partnership with a dev
                    team from Tech for Social Good)</b>.

                </p>

                {/* BIG LINK */}
                <p className='text-2xl text-gray-80 mt-14 mb-8 font-medium text-center'>
                    <Link
                        href='https://drive.google.com/file/d/1MP0-8dL4lN1oUqaoaW_sSjHLXCdOhKNR/view?usp=sharing'
                        className="group relative font-medium text-green-800 hover:text-green-900 transition duration-300"
                        passHref>
                        read the final design report
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-900 transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                </p>
            </div>

        </div>
    )
}