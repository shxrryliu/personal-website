import '../tailwind.config'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const lifeUpdates = { 
    title: "life updates",
    date: '12/21/2023', 
    content: 'back in Vegas! focusing on self care. exploring interesting classes for my last semester. brainstorming personal projects. trying to read more and keep up with my favorite podcasts.'
  };

const workUpdates = {
    title: "work updates",
    current: 'finishing my degree in Applied Mathematics in Sociology, incoming product manager @ Microsoft, and a teaching fellow for Harvard\'s Technology & Privacy class.',
    previous: 'director of product research & design @ tech for social good, software engineer intern @ Neeva (now Snowflake), product development intern @ Companion Home. ',
    // Add the rest of your work update content here
  };

export default function Home() {
    console.log(lifeUpdates);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">


        <img src="/me2.jpg" alt="me!" className="rounded-full w-32 h-32 object-cover mr-1 my-12 mt-28 scale-125"/>

        <h2 className="text-2xl font-bold text-center">Hey! I'm Sherry.</h2>
        <p className="text-2xl font-bold text-center mt-2">A quantitative social scientist from Las Vegas.</p>
        <p className="text-center mt-4 mb-8 text-gray-800">I’m passionate about socially-minded tech development.</p>
  
        <div className="flex space-x-16 mb-12">
          <a href="https://github.com/shxrryliu" aria-label="Github" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/sherryliuser/" aria-label="Instagram" className="text-gray-500 hover:text-gray-700">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/sherry-liu-0183a7167/" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-700">
            <FaLinkedin size={30} />
          </a>
        </div>

    <div className="flex flex-col p-4 max-w-3xl med:mx-auto mx-3">
      <div className="sm:flex mb-4">
        <div className="sm:w-1/3">
          <h2 className="text-xl text-gray-800">{lifeUpdates.title}</h2>
          <p className="text-xs text-gray-500 sm:ml-3 sm:p-2 my-2">{lifeUpdates.date}</p>
        </div>
        <div className="sm:w-2/3">
          <p className="text-gray-700">
            {lifeUpdates.content}
          </p>
        </div>
      </div>

      <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-4 mx-auto" />

      <div className="sm:flex">
        <div className="sm:w-1/3">
          <h2 className="text-xl text-gray-800">{workUpdates.title}</h2>
          <div className="sm:mt-8">
            <p className="text-lg text-gray-800 sm:ml-10 sm:block hidden">currently</p>
            <p className="text-lg text-gray-800 my-2 sm:mt-12 sm:ml-10 sm:block hidden">previously</p>
          </div>
        </div>
        <div className="sm:w-2/3">
          <p className="text-gray-700 my-2 sm:mt-10">
            <p className="block sm:hidden text-lg text-gray-800 my-1">currently</p>
            {workUpdates.current}
          </p>
          <p className="text-gray-700 my-4 sm:mt-4">
          <p className="block sm:hidden text-lg text-gray-800 my-1">previously</p>
            {workUpdates.previous}
          </p>
        </div>
      </div>

    </div>

  </div>
  );
}
