import '../../tailwind.config'
import Link from 'next/link'


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 text-gray-700">

            {/* HEADER */}
            <div className='sm:flex sm:flex-row max-w-3xl mt-24'>
                <div className='sm:w-3/5 p-3 sm:mt-10'>
                    <h1 className="text-3xl font-bold leading-tight text-blue-900">
                        Discriminology Community Data Platform
                    </h1>
                    <p className="mt-3 sm:mt-6 text-sm ">
                        A community data platform that democratizes education data for Black and Brown communities.
                    </p>
                </div>
                <div className="sm:w-1/2 grid grid-cols-2 gap-1 sm:gap-2 mb-4 sm:mb-0">
                    <img src="/projects/discriminology/home.png" alt="home page" className="h-80 shadow-lg rounded-3xl overflow-hidden mx-auto" />
                    <img src="/projects/discriminology/reports.png" alt="Screenshot 2" className="h-80 shadow-lg rounded-3xl overflow-hidden" />
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
                        <p className="text-sm text-gray-600">design lead</p>
                    </div>
                    <div className="p-5">
                        <p className="text-sm font-semibold ">year</p>
                        <p className="text-sm text-gray-600">2022</p>
                    </div>
                </div>
            </div>

            {/* upper section */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:mt-14 mt-8'>
                <h3 className='mb-4 text-xl font-medium text-blue-900'>a partner project between Discriminology and Harvard Tech for Social Good</h3>
                <p className=' mb-4'>
                    A team from Harvard Tech for Social Good was put together to help Discriminology build a new mobile platform.
                </p>
                <p>
                    I was the <b className='text-blue-700'>Senior Designer</b> with a team of 4 designers. Our process consisted of:
                </p>
                <ul className="list-disc list-inside mx-6">
                    <li className='my-1'>7 focus group interviews</li>
                    <li className='mb-1'>Affinity mapping and identifying pain points</li>
                    <li className='mb-1'>Feature lists and feature flows</li>
                    <li className='mb-1'>Midpoint feedback session with the founders</li>
                    <li className='mb-1'>Low fidelity prototypes</li>
                    <li className='mb-1'>Usability tests</li>
                    <li className='mb-1'>High-fidelity prototypes and Final Design Report</li>
                </ul>

                {/* problem statement */}
                <h3 className='mt-10 sm:mt-16 pb-4 text-xl font-medium text-blue-900'>the problem</h3>
                <p className='font-medium'>
                    There is no universal platform to help students report instances of racially charged interactions in schools.
                    Police reports are disorganized, individual, and meant to help officers — not the community.
                </p>
                <p className='my-4'>
                    In developing a mobile application that democratizes education data for communities of color,
                    Discriminiology found that community organizers prefer
                    <b className='text-blue-700'> qualitative narratives to quantitative data</b>, and that personal narratives are often necessary to provide <b className='text-blue-700'> context</b> to numerical data.
                </p>
                <p className='pb-2 mx-5 sm:mx-20 italic'>
                    “Reports and suspensions have little-to-no context, which makes it very difficult to identify issues within
                    school districts with respect to expulsions, suspensions, and other disciplinary action.”
                </p>
                <p className='pb-4 mx-5 sm:mx-20 text-right italic'>
                    — Robb King, Discriminology</p>

                <p className='my-4'>
                    Our research and design aimed to solve a key problem statement:
                </p>
                <p className='text-blue-900 mb-4 font-medium mx-5 sm:mx-20 bg-gray-100 p-4 rounded-md shadow-md'>
                    How can we design an accessible, user-friendly reporting tool that provides narrative context
                    alongside quantitative data in a way that is useful for community organizers?
                </p>
            </div>

            {/* divider */}
            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-6 mx-auto" />
            </div>

            {/* RESEARCH */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3'>
                <h3 className='text-3xl font-medium text-blue-900 text-center'>Weeks 1-4: Research.</h3>

                {/* user research */}
                <h3 className='mt-12 mb-4 text-xl font-medium text-blue-900'>background research & focus group analysis</h3>
                <p className=' my-4'>
                    In the first half of our <b className='text-blue-700'>12-week cycle</b>, we scoped 8 existing reporting, mapping tools,
                    and discussion platforms such as Snapchat, Google Maps, Waze, and Reddit, and reviewed
                    <b className='text-blue-700'> 5 focus group recordings with 12 community leaders</b>, with analysis focused on <b className='text-blue-700'> user-centered design strategies</b>.
                </p>
                <p className=' my-4'>
                    The goal of our focus group analysis was to discover the main <b className='text-blue-700'> behaviors, attitudes, pain points, and goals</b> of each user.
                    Behaviors and pain points allowed us to get a better sense of what does and does not work with the current system,
                    leading to the formulation of goals that we would try to incorporate into our new system designs.
                </p>

                <img src='/projects/discriminology/userresearch.png' alt='user research table'
                    className='self-center rounded-md shadow-md border-2 border-gray-400 p-2 mt-8 hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>

                <p className="text-center text-sm mt-2 text-gray-600 italic">We used Notion to track our insights!</p>

                {/* affinity group analysis */}
                <h3 className='mt-10 sm:mt-16 mb-4 text-xl font-medium text-blue-900'>affinity group analysis</h3>
                <p className=' my-4'>
                    In our affinity mapping process, we synthesized those insights into a visualization of pain points and goals to guide our designs.
                    This process of analyzing qualitative data involved writing down quotes and main takeaways from our focus group analyses and categorizing them into more general pain points.
                </p>

                <img src='/projects/discriminology/affinitymap.png' alt='affinity map'
                    className='self-center rounded-md shadow-md border-2 border-gray-400 p-2 mt-8 hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>

                <p className="text-center text-sm mt-2 text-gray-600 italic mx-2 sm:mx-20">
                    After synthesizing our key findings from the focus group recordings into small sticky notes, we visually mapped them into larger categories such as “collecting data” and “sharing data w/ community”. This allowed us to identify key pain points from the community organizers’ perspectives.
                </p>

                {/* KEY INSIGHTS */}
                <h3 className='mt-10 sm:mt-16 mb-4 text-xl font-medium text-blue-900'>key insights & pain points</h3>
                <p className=' my-4'>
                    Through our user research and affinity mapping, we categorized the <b className='text-blue-700'>pain points</b> into areas of focus: <i>collecting data, data analysis, sharing data with the community, and promoting community activism,</i> among others.
                    After prioritizing them based on Discriminology’s need and team bandwidth, we narrowed down our insights to four core pain points in our design:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-blue-700">Inconsistent Data Collection</h3>
                        <p className="text-gray-600 text-sm">
                            Data collection is <i>inconsistent, cross-platform, and not very user-friendly</i> for members of the community to input. Most reports don't have much context to support them, either.
                        </p>
                    </div>
                    <div className='p-5 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-blue-700">Challenges Analyzing Data</h3>
                        <p className="text-gray-600 text-sm">
                            Community organizers are having trouble not only taking in data, but visualizing it and turning it into insights that they can utilize in their work.
                        </p>
                    </div>
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-blue-700">Sharing with Community</h3>
                        <p className="text-gray-600 text-sm">
                            Currently, community organizers are the only ones seeing the data they collect — there is no form of community engagement.
                        </p>
                    </div>
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-blue-700">Promoting Community Activism</h3>
                        <p className="text-gray-600 text-sm">
                            With no way to easily share data and other resources with students + community members, organizers aren't able to stimulate activism in their communities efficiently.
                        </p>
                    </div>
                </div>

                <p className=' mt-6'>
                    There were also a couple other general pain points users mentioned:
                </p>
                <ul className='list-disc list-inside mx-8 '>
                    <li className='my-2'>
                        <b className='text-blue-700'>Tech-Averse Attitudes</b>: Several users described a lack of formal training while onboarding new tech tools, and teaching people to use
                        new tools can be expensive and ultimately not user-friendly. Users also mentioned a digital literacy gap in the knowledge that organizers may have in maximizing the
                        internet for personal development and growth.
                    </li>
                    <li className='my-2'>
                        <b className='text-blue-700'>Challenges with Building Relationships</b>: Users also noted a lack of opportunities for building interpersonal relationships with students,
                        even though much of their work revolves around facilitating conversations with students. Additionally, users mentioned that not having formal relationships with schools meant
                        that they were often not able to speak to students at those schools, limiting the reach of their activism.
                    </li>
                    <li className='my-2'>
                        <b className='text-blue-700'>Tracking & Logistical Challenges</b>: Users also mentioned wanting an all-inclusive platform to track various parts of their work, ranging
                        from a database for donors and fundraisers, to a better way to file emails and testimonials, to a platform that can track social media posts and members. Overall, cross-platform
                        data tracking appeared to be a major operational challenge.
                    </li>
                </ul>
            </div>

            {/* divider */}
            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-6 mx-auto" />
            </div>

            {/* IDEATION */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 '>
                <h3 className='text-3xl font-medium text-blue-900 text-center'>Weeks 4-8: Ideation.</h3>

                {/* ideation */}
                <h3 className='mt-10 sm:mt-14 mb-4 text-xl font-medium text-blue-900'>feature ideation</h3>
                <p className='my-4'>
                    Based on these pain points, we determined the top features in our scope:
                </p>
                <ul className='list-disc list-inside mx-8 font-medium'>
                        <li className='my-2'>
                            <b className='text-blue-700'>A reporting database</b> to track and report instances of discrimination
                            or police presence at schools.
                        </li>
                        <li className='my-2'>
                            <b className='text-blue-700'>A heat mapping tool leading into top-level regional insights</b>, which
                            allows students and organizers to monitor trends based on geographic cluster.
                        </li>
                        <li className='my-2'>
                            <b className='text-blue-700'>A local discussion board</b> for all community members to engage on discussion
                            topics and allow organizers to connect with individuals.
                        </li>
                    </ul>
                <p className='my-4'>
                    We determined that these features would address the most urgent needs noted by Discriminology
                    and community organizers. This ideal system builds a focus on several main pain points that were
                    discussed earlier––mainly alleviating the process of collecting and analyzing data from the
                    community organizers’ perspectives.

                </p>

                {/* sprint 1 */}
                <h3 className='mt-10 sm:mt-16 mb-4 text-2xl font-medium text-blue-900 text-center italic'>Sprint 1: Low Fidelity</h3>
                <p className='my-4'>
                    In our first sprint, our goal was to <b className='text-blue-700'> gain maximum feedback</b> to provide future design direction.
                    To quickly generate ideas and to encourage honest feedback, we completed our designs in <b className='text-blue-700'>low fidelity</b>,
                    which means they were akin to rough sketches to focus on layout rather than visual details.
                    <i> This is not our final design</i>.</p>
                <p className='my-4'>
                    To create our first rough, clickable prototype, we used the Fisamiq Figma Template Design System,
                    which includes various components that mimic sketched prototypes. After showing designs to 12+
                    community organizers in our initial feedback session, we incorporated their insights into Sprint 2 designs.                </p>

                {/* reporting database */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-blue-900'>feature 1: reporting database</h3>
                <p className='my-4'>
                    For the reporting database, which is the most fundamental feature of the app, we made a <b className='text-blue-700'>two-step approach</b> to reporting.
                    In the first step, we took inspiration from apps like Waze which make it simple to report traffic incidents. We focused on making the experience as simple and streamlined as
                    possible via <b className='text-blue-700'>multiple-choice questionnaires</b>. To nudge for more details after this low-friction reporting experience, we included
                    a <b className='text-blue-700'>follow-up notification</b> for qualitative details with responses in paragraph form.
                </p>

                <div className='grid grid-cols-3 gap-4 sm:px-10'>
                    <div>
                        <img src='/projects/discriminology/lofi/report1.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>placeholders in low fidelity prototype</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/lofi/report2.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>simple, multiple choice</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/lofi/report3privacy.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>privacy preferences to help students feel comfortable</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/lofi/report5status.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>report submitted, but follow-up questionnaire needed</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/lofi/report6notif.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>notification for qualitative details</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/lofi/report7.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center  mt-2'>open-ended questions</p>
                    </div>
                </div>

                {/* heatmap */}
                <h3 className='mt-12 sm:mt-20 mb-4 text-xl font-medium text-blue-900'>feature 2: heatmap with top-level insights</h3>
                <p className='my-4'>
                    Our second feature uses a heatmap as a combination of a <b className='text-blue-700'>mapping and data analytics tool</b>.
                    Depending on the user needs, the map could show the concentration of reports coming in from schools in their area. At a quick glance, each
                    location would show relevant <b className='text-blue-700'>top-level insights</b>, with deeper analytics nested further.
                </p>

                <div className='grid grid-cols-3 gap-4 sm:px-10'>
                    <div>
                        <img src='/projects/discriminology/lofi/map1.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>heatmap showing report density</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/lofi/map2.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>at-a-glance insights</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/lofi/map3.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>reports with tags</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/lofi/map4.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>filters</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/lofi/map5.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>high-level trends [potential for AI use here]</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/lofi/map6.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>data visualizations for each district</p>
                    </div>
                </div>

                {/* discussion board */}
                <h3 className='mt-12 sm:mt-20 mb-4 text-xl font-medium text-blue-900'>feature 3: local discussion board</h3>
                <div className='my-4'>
                    <p>Lastly, we had a discussion board feature, designed to facilitate further conversation and buzz amongst
                        users on the platform. This feature was modeled similarly to Reddit, where users are able to create discussion posts
                        under particular topics, which can then be opened up to allow replies and reactions to those threads.</p>
                </div>
                <div className='sm:px-10'>
                    <img src='/projects/discriminology/lofi/discussion.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1 w-1/3 m-5 mx-auto'/></div>



                {/* usability testing */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-blue-900'>usability testing</h3>
                <p className='my-4'>
                    After creating our low-fidelity prototypes, we brought the prototypes to a live audience with 3 users for a <b className='text-blue-700'>usability test</b>.
                    In that session, we walked through the prototype using the following interview procedure:
                </p>
                <ul className='my-6 list-inside mx-8'>
                    <li className='my-2'>1. Prime <b className='text-blue-700 font-medium'>frame of mind</b> by showing and explaining the current page and available interactions.</li>
                    <li className='my-2'>2. Establish <b className='text-blue-700 font-medium'>expectations</b> by asking what the user expects after an interaction.</li>
                    <li className='my-2'>3. Reveal & gauge <b className='text-blue-700 font-medium'>alignment</b> with the user's expectations. Ask follow-up questions.</li>
                </ul>

                <p className='mt-8'>Our usability testing revealed the following feedback:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-blue-700">Reporting Database</h3>
                        <ul className='my-4 list-disc list-inside text-sm'>
                            <li className='my-2'>Privacy preferences should be asked first to encourage and honest responses through data transparency. </li>
                            <li className='my-2'>More iconography than was originally included in the lo-fis, helping to visually streamline the process for users.</li>
                        </ul>
                    </div>
                    <div className='p-5 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-blue-700">Heatmap & Top-Level Insights</h3>
                        <ul className='my-4 list-disc list-inside text-sm'>
                            <li className='my-2'>Consider the accessibility of color-coding a heatmap visualization.</li>
                            <li className='my-2'>Having both vertical and horizontal scrolling felt less intuitive than expected.</li>
                        </ul>
                    </div>
                    <div className='p-4 bg-gray-100 rounded-md shadow-md hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'>
                        <h3 className="font-bold mb-3 text-blue-700">Discussion Board</h3>
                        <ul className='my-4 list-disc list-inside text-sm'>
                            <li className='my-2'>It may be more helpful for users to be able to create a post without needing to select
                                a category for users who may not be interested in reading through other posts. </li>
                            <li className='my-2'>Profile should be separate, not nested here.</li>
                        </ul>
                    </div>
                </div>

                <p className='mt-6'>
                    There were also a couple other general pieces of feedback from out users:
                </p>
                <ul className='list-disc list-inside mx-8'>
                    <li className='my-2'>
                        <b className='text-blue-700'>Accessibility Options</b>: Users emphasized the importance of including accessibility options in the app
                        for the visually impaired.
                    </li>
                    <li className='my-2'>
                        <b className='text-blue-700'>More Icons</b>: Users repeatedly mentioned iconography as an important aspect of making the app
                        user-friendly and intuitive. They specifically wanted more icons on the home page.
                    </li>
                    <li className='my-2'>
                        <b className='text-blue-700'>Profile Pages</b>: Users wanted to see profile pages with relevant information,
                        such as geographic area, role in an organization, pronouns, and also the user’s own posts when other people land on their page.
                        The profile pages ought to be accessible from the home page of the app itself, allowing the app to find users, rather than
                        being hidden away in the discussion board feature.
                    </li>
                </ul>


            </div>

            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-6 mx-auto" />
            </div>

            {/* FINAL DESIGN SOLUTION */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 '>
                <h3 className='text-3xl font-medium text-blue-900 text-center'>Weeks 8-12: Final Design Solution.</h3>
                {/* description */}
                <p className='mt-10'>
                    <b className='font-medium'>This takes us to the final design solution, which was handed off to a dev team for development!</b> Note that
                    <b className='text-blue-700'> some content will be filler</b> in this final design. This was a joint decision made with Discriminology, since
                    we are not subject-area experts in writing neutral fact-finding questions.
                </p>
                <p>
                    <br />
                    Feedback from usability testing was incorporated to refine the user flow and <b className='text-blue-700'>information architecture </b>
                    was developed. We added a standard login flow that prioritizes upfront <b className='text-blue-700'> privacy disclaimers</b> into a home page with
                    <b className='text-blue-700'> distinct iconography</b>.
                </p>

                {/* <h3 className='mt-10 sm:mt-16 mb-4 text-2xl font-medium text-blue-900 text-center italic'>Sprint 2: High Fidelity</h3> */}


                {/* login flow */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-blue-900'>login flow emphasizing privacy</h3>
                <p className='my-4'>
                    We used a similar visual aesthetic as the current Discriminology website. This flow includes the opportunity for a user to <b className='text-blue-700'>browse as guest</b> to increase accessibility
                    of information, even to people who may not yet feel ready to post. Notably, we also feature <b className='text-blue-700'>privacy level </b>
                    as one of the first screens.
                </p>
                <div className='grid grid-cols-3 gap-4 sm:px-10'>
                    <div>
                        <img src='/projects/discriminology/hifi/launch.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        {/* <p className='text-center mt-2'>heatmap showing report density</p> */}
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/signup.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        {/* <p className='text-center mt-2'>at-a-glance insights</p> */}
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/privacysignin.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        {/* <p className='text-center mt-2'>reports with tags</p> */}
                    </div>
                </div>

                {/* homepage */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-blue-900'>home page: clear iconography & relevant info</h3>
                <div className='sm:flex flex-row'>
                    <div className='sm:w-2/3 sm:pr-10'>
                        For an updated home page, we incorporated user feedback for the following changes.
                        <ul className='list-disc list-inside mx-8'>
                            <li className='my-2'>
                                <b className='text-blue-700'>Profile Snippet</b>: included relevant information, pronouns, school association, and a verified checkmark
                                to confirm that the user's identity within a school or organization is verified.
                            </li>
                            <li className='my-2'>
                                <b className='text-blue-700'>Clear Iconography</b>: each call-to-action (CTA) had visual iconography associated with it, as well
                                as color weights to separate "report" from other CTAs.
                            </li>

                            <li className='my-2'>
                                <b className='text-blue-700'>Relevant "Recently" Feed</b>: including most notable trends that the user is following, or by geographic pertinence.
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/3 sm:pr-10 mx-auto my-6 sm:my-0'>
                        <img src='/projects/discriminology/hifi/homepg.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                    </div>
                </div>


                {/* feature 1 */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-blue-900'>feature 1: streamlined report flow</h3>
                <p className='my-4'>
                    In the high fidelity prototype, we <b className='text-blue-700'>removed the two-step interaction</b> and incorporated additional questions
                    into the questionnaire itself. Privacy settings were asked first, and we included <b className='text-blue-700'>voice typing & video/photo attachments </b>
                    to provide better qualitative context.
                </p>
                <div className='grid grid-cols-3 gap-4 sm:px-10'>
                    <div>
                        <img src='/projects/discriminology/hifi/choosereport.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>distinct iconography to distinguish between choices</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/privacyreport.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>privacy preferences are upfront</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/mc.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>simple, multiple-choice answers</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/long.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>long-form questions with attachments and voice recording</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/review.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>final review, with option to edit</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/submitted.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>submission hero notification</p>
                    </div>
                </div>

                {/* heatmap and top-lvl insights */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-blue-900'>feature 2: heatmap & top-level insights</h3>
                <p className='my-4'>
                    In this version, the map is more visual and realistic, with more intuitive integration with top-level insights.
                    In top-level insights, the <b className='text-blue-700'>information architecture</b> was updated to have a "View more" button
                    in lieu of both horizontal and vertical scrolling. The data visualizations were organized from <b className='text-blue-700'> broad to specific </b>analysis
                     per region. Custom filters were added to suit user needs. <i>Again, note that the content is largely filler, made in 
                        agreement with the client's asks.
                     </i>
                </p>
                <div className='grid grid-cols-3 gap-4 sm:px-10'>
                    <div>
                        <img src='/projects/discriminology/hifi/map.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>map view with heat filter applied</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/toplvl.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>top-level insights for an example district</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/reportsrch.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>ability to search for specific reports</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/moreinsights.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>user can explore in-depth insights</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/moremore.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>data organized by specificity and region</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/Filters.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>custom filters for relevant results</p>
                    </div>
                </div>

                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-blue-900'>feature 3: discussion board</h3>
                <p className='my-4'>
                    For the final handoff, this feature was prioritized last, since it could be high-effort and medium-low-impact to recreate 
                    a social media system. The final design leveraged user feedback to include options for search based on location and category, 
                    as well as a warning for potential sensitive media linked with posts.
                     <i>Note that the content is mostly filler.
                     </i>
                </p>
                <div className='grid grid-cols-3 gap-4 sm:px-10'>
                    <div>
                        <img src='/projects/discriminology/hifi/hfdiscussion.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>discussion board feed</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/sampledisc.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>sample post with tags and media attachments</p>
                    </div>
                    <div>
                        <img src='/projects/discriminology/hifi/sensitive.png' className='border-2 border-gray-400 rounded-lg hover:shadow-xl transition duration-300 
                ease-in-out transform hover:-translate-y-1'/>
                        <p className='text-center mt-2'>sensitive image warning</p>
                    </div>
                </div>

                {/* lastly, */}
                <h3 className='mt-12 sm:mt-16 mb-4 text-xl font-medium text-blue-900'>finale</h3>
                <p className='my-4'>
                    Thanks for making it this far! I'd like to thank Discriminology for giving me the chance to work on an interesting 
                    and high-impact project. These have been handed off for development with their team (in partnership with a dev 
                    team from Tech for Social Good).

                </p>

                {/* BIG LINK */}
                <p className='text-2xl text-gray-80 mt-14 mb-8 font-medium text-center'>
                    <Link
                        href='https://drive.google.com/file/d/1MP0-8dL4lN1oUqaoaW_sSjHLXCdOhKNR/view?usp=sharing'
                        className="group relative font-medium text-blue-700 hover:text-blue-900 transition duration-300"
                        passHref>
                        read the final design report
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                </p>
            </div>

        </div>
    )
}