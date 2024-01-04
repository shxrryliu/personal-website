import '../tailwind.config'
import { FaInstagram, FaGoodreads, FaSpotify } from 'react-icons/fa';

const sideQuests = [
    { imgPath: '../sidequests/half.jpg', description: 'ran a half marathon' },
    { imgPath: '../sidequests/portugal.jpg', description: 'traveled to portugal' },
    { imgPath: '../sidequests/seoul.png', description: 'played dress up (in seoul, sk)' },
    { imgPath: '../sidequests/whidbey.jpg', description: 'went to whidbey island' },
    { imgPath: '../sidequests/birthday.jpg', description: 'turned 21' },
    { imgPath: '../sidequests/china.png', description: 'went to the motherland (中国)' },
]


export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <h2 className="text-3xl font-semibold text-center mt-32 sm:mt-36">I'm Sherry.</h2>
            <p className='text-xs text-center pt-2 pb-10 text-gray-800'>[she/they]</p>

            {/* quick intro */}
            <div className='flex sm:flex-row flex-col items-center max-w-3xl p-4 md:mx-auto mx-3'>
                <div className='sm:w-1/2 med:mr-0 sm:mr-8 sm:pl-1'>
                    <img src='/me4.jpg' alt='me again' className='w-full h-72 bg-gray-200 rounded-lg object-cover
                        hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden' />
                    <p className="text-center text-xs mt-2 text-gray-600">me on film.</p>
                </div>
                <div className='sm:w-1/2 my-6 sm:my-auto'>
                    <p className='text-xl font-semibold pb-4 sm:pb-10 text-gray-800'>i’m a senior @ Harvard interested in social science, design, and technology.</p>
                    <p className='text-med text-gray-700'>i’m also the eldest daughter of two Chinese immigrants and from Las Vegas (
                        <a
                            href="https://www.bbc.com/news/world-us-canada-67642512"
                            className="group relative text-red-700 hover:text-red-900 transition duration-300"
                        >
                            #unlvstrong
                            {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span> */}
                        </a>). i love houseplants, dark chocolate, and my favorite color is dark red.</p>
                </div>
            </div>

            {/* divider */}
            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-6 mx-auto" />
            </div>

            {/* values section */}
            <div className='text-left max-w-3xl p-4 md:mx-auto mx-3'>
                <p className='text-xl font-medium pb-4 sm:pb-8 text-gray-800'>if you’re also interested in ethical tech, let’s collab!</p>
                <p className='text-med pb-4 text-gray-700'>i believe that innovation is exciting for its own sake, but tech is always situated in its social context.
                    as designers/developers, it is our responsibility to advance the interest of the underprivileged and minimize unfair exploitation.
                </p>
                <p className='text-med text-gray-700'>as a quantitative social scientist, i think that data should be leveraged to hold those in power accountable.
                    together, let’s strive for better.
                </p>
            </div>

            {/* divider */}
            <div className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-6 mx-auto" />
            </div>

            {/* side quests */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3'>
                <p className='text-xl pb-4 sm:pb-8 text-left text-gray-800'>a few side quests from 2023</p>
                <div className='grid md:grid-cols-3 grid-cols-2 gap-10 mb-8 mx-3'>
                    {sideQuests.map((quest, index) => (
                        <div key={index}>
                            <img src={quest.imgPath} alt={quest.description} className='w-full rounded-lg md:h-52 h-44 bg-gray-200 object-cover
                                hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden' />
                            <p className='text-center text-sm mt-2 text-gray-600'>{quest.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* other social media places */}
            <div className='flex flex-col max-w-3xl items-center justify-center p-4 md:mx-auto mx-3'>
                <p className='text-med pb-6 text-gray-800 text-center'>even more places to find me (not work):</p>
                <div className="flex space-x-16">
                    <a href="https://www.goodreads.com/user/show/50509124-sherry-liu" aria-label="Github" className="text-gray-500 hover:text-red-700 hover:drop-shadow-md
            transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <FaGoodreads size={30} />
                    </a>
                    <a href="https://www.instagram.com/sherryliuser/" aria-label="Instagram" className="text-gray-500 hover:text-red-700 hover:drop-shadow-md
            transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://open.spotify.com/user/shxrryliu" aria-label="Spotify" className="text-gray-500 hover:text-red-700 hover:drop-shadow-md
            transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <FaSpotify size={30} />
                    </a>
                </div>
            </div>
        </div>

    )
}