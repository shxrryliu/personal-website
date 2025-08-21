import '../tailwind.config'
import { FaInstagram, FaGoodreads, FaSpotify } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Section, ListStagger, Item, variants } from '../components/animationVariants';

const sideQuests = [
    { imgPath: '../sidequests/grad.jpg', description: 'graduated!' },
    { imgPath: '../sidequests/istanbul.jpg', description: 'traveled to istanbul' },
    { imgPath: '../sidequests/kitty.jpg', description: 'rescued a tiny kitten in beijing' },
    { imgPath: '../sidequests/sf.jpg', description: 'moved to the bay area' },
    { imgPath: '../sidequests/job.jpg', description: 'started working full-time' },
    { imgPath: '../sidequests/sub.jpg', description: 'picked up a hobby (substack)', link: 'https://sherryliuser.substack.com/' },
];

export default function About() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants.container}
            className="flex flex-col items-center justify-center min-h-screen p-6"
        >
            {/* Hero */}
            <Section>
                <h2 className="text-3xl font-semibold text-center mt-32 sm:mt-36">I'm Sherry.</h2>
                <p className='text-xs text-center pt-2 pb-10 text-gray-800'>[she/they]</p>
            </Section>

            {/* Quick intro */}
            <Section className='flex sm:flex-row flex-col items-center max-w-3xl p-4 md:mx-auto mx-3'>
                <div className='sm:w-1/2 med:mr-0 sm:mr-8 sm:pl-1'>
                    <img
                        src='/me4.jpg'
                        alt='me again'
                        className='w-full h-72 bg-gray-200 rounded-lg object-cover
                            hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden'
                    />
                    <p className="text-center text-xs mt-2 text-gray-600">me on film.</p>
                </div>
                <div className='sm:w-1/2 my-6 sm:my-auto'>
                    <p className='text-xl font-semibold pb-4 sm:pb-10 text-gray-800'>
                        i'm a product manager interested in social science, design, and technology.
                    </p>
                    <p className='text-med text-gray-700'>
                        i'm also the eldest daughter of two Chinese immigrants and from Las Vegas. 
                        i love houseplants, dark chocolate, and my favorite color is dark red.
                    </p>
                </div>
            </Section>

            {/* Divider */}
            <Section className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-6 mx-auto" />
            </Section>

            {/* Values section */}
            <Section className='text-left max-w-3xl p-4 md:mx-auto mx-3'>
                <p className='text-xl font-medium pb-4 sm:pb-8 text-gray-800'>
                    if you're also interested in ethical tech, let's collab!
                </p>
                <p className='text-med pb-4 text-gray-700'>
                    always happy to connect with people hoping to make the world a better place.
                    if you're looking for a product manager, designer, or sounding board, 
                    don't hesitate to reach out!
                </p>
            </Section>

            {/* Divider */}
            <Section className='max-w-3xl w-full mx-auto'>
                <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-6 mx-auto" />
            </Section>

            {/* Side quests grid */}
            <Section className='max-w-3xl w-full p-4 md:mx-auto mx-3'>
                <p className='text-xl pb-4 sm:pb-8 text-left text-gray-800'>
                    a few side (and main) quests from 2024:
                </p>

                <ListStagger className='grid md:grid-cols-3 grid-cols-2 gap-10 mb-8 mx-3'>
                    {sideQuests.map((quest, index) => (
                        <Item key={index}>
                            {quest.link ? (
                                <a href={quest.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={quest.imgPath}
                                        alt={quest.description}
                                        className='w-full rounded-lg md:h-52 h-44 bg-gray-200 object-cover
                                            hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden'
                                    />
                                </a>
                            ) : (
                                <img
                                    src={quest.imgPath}
                                    alt={quest.description}
                                    className='w-full rounded-lg md:h-52 h-44 bg-gray-200 object-cover
                                        hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden'
                                />
                            )}
                            <p className='text-center text-sm mt-2 text-gray-600'>{quest.description}</p>
                        </Item>
                    ))}
                </ListStagger>
            </Section>

            {/* Other social media */}
            <Section className='flex flex-col max-w-3xl items-center justify-center p-4 md:mx-auto mx-3'>
                <p className='text-med pb-6 text-gray-800 text-center'>
                    even more places to find me (not work):
                </p>
                <div className="flex space-x-16">
                    <a href="https://www.goodreads.com/user/show/50509124-sherry-liu" aria-label="Goodreads"
                        className="text-gray-500 hover:text-red-700 hover:drop-shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <FaGoodreads size={30} />
                    </a>
                    <a href="https://www.instagram.com/sherryliuser/" aria-label="Instagram"
                        className="text-gray-500 hover:text-red-700 hover:drop-shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://open.spotify.com/user/shxrryliu" aria-label="Spotify"
                        className="text-gray-500 hover:text-red-700 hover:drop-shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <FaSpotify size={30} />
                    </a>
                </div>
            </Section>
        </motion.div>
    );
}
