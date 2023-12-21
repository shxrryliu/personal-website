import '../tailwind.config'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const lifeUpdates = { 
    title: "life updates",
    timestamp: '00:00:00 PST', 
    content: 'back in Vegas! focusing on self care. exploring interesting classes for my last semester. brainstorming personal projects. trying to read more and keep up with my podcasts.'
  };

const workUpdates = {
    title: "work updates",
    current: 'finishing my degree in Applied Mathematics in Sociology, incoming product manager @ Microsoft, and a teaching fellow for Harvard\'s Technology & Privacy class.',
    previous: 'director of product research & design (former senior designer) @ tech for social good, software engineer intern @ Neeva (now Snowflake), product development intern @ Companion Home. ',
    // Add the rest of your work update content here
  };

export default function Home() {
    console.log(lifeUpdates);

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h2 className="text-2xl font-bold text-center">Hey! I'm Sherry.</h2>
        <p className="text-2xl font-bold text-center mt-2">A quantitative social scientist from Las Vegas.</p>
        <p className="text-center mt-4 mb-8">I’m passionate about socially-minded tech development.</p>
  
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


      <div className="flex justify-between space-x-16 items-center p-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-medium text-gray-800">{lifeUpdates.title}</h2>
          <p className="text-sm text-gray-500">{lifeUpdates.timestamp}</p>
        </div>
        <p className="text-gray-800 max-w-lg">
          {lifeUpdates.content}
        </p>
      </div>

      <div className="border-t border-gray-500 my-4 w-52"></div>

      <section className="my-8">
        <h2 className="text-xl font-medium text-gray-800 mb-2">Work Updates</h2>
        <div className="mb-4">
          <h3 className="text-lg text-gray-800">Currently</h3>
          <p className="text-gray-700">{workUpdates.current}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg text-gray-800">Previously</h3>
          <p className="text-gray-700">{workUpdates.previous}</p>
        </div>
      </section>

    </div>
  );
}
