import '../tailwind.config'
import { FaGithub, FaInstagram, FaLinkedin , FaRegEnvelope} from 'react-icons/fa';


const lifeUpdates = { 
    title: "life updates",
    date: '12/21/2023', 
    content: 'back in Vegas! focusing on self care. exploring interesting classes for my last semester. brainstorming personal projects. trying to read more and keep up with my favorite podcasts.'
  };

  const workUpdates = {
    title: "work updates",
    current: (
      <p>
        finishing my degree in Applied Mathematics in Sociology, incoming product
        manager @ Microsoft, and a teaching fellow for Harvard's{' '}
        <a
          href="https://canvas.harvard.edu/courses/123847/assignments/syllabus" 
          className="group relative text-red-700 hover:text-red-900 transition duration-300"
        >
          technology & privacy class
          {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span> */}
        </a>
        .
      </p>
    ),
    previous: (
      <p>
        director of product research & design @ {' '}
        <a 
        href="https://socialgood.hcs.harvard.edu/"
        className="group relative text-red-700 hover:text-red-900 transition duration-300"
        >
           tech for social good
          {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span> */}
        </a>
        , software
        engineer intern @ Neeva (now Snowflake), product development intern @
        Companion Home.
      </p>
    ),
  };
  
  
const featuredProjects = [
    {
      title: "project one",
      description: "description.",
      imageUrl: "/project-one.jpg", // Replace with your image path
      link: "#", // Replace with your project link if available
    },
    {
      title: "project two",
      description: "description.",
      imageUrl: "/project-two.jpg", // Replace with your image path
      link: "#", // Replace with your project link if available
    },
    {
      title: "project three",
      description: "description.",
      imageUrl: "/project-two.jpg", // Replace with your image path
      link: "#", // Replace with your project link if available
    },  ];

export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">

        {/* image */}
        <img src="/me2.jpg" alt="me!" className="rounded-full w-32 h-32 object-cover mr-1 my-12 mt-32 scale-1"/>

        {/* introduction */}
        <h2 className="text-2xl font-semibold text-center">Hey! I'm Sherry.</h2>
        <p className="text-2xl font-semibold text-center mt-2">A quantitative social scientist from Las Vegas.</p>
        <p className="text-center mt-4 mb-8 text-gray-800">I’m passionate about socially-minded tech development.</p>

        {/* social icons! */}
        <div className="flex space-x-16 mb-12">
          <a href="https://github.com/shxrryliu" aria-label="Github" className="text-gray-500 hover:text-red-700 hover:drop-shadow-md
          transition duration-300 ease-in-out transform hover:-translate-y-1">
            <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/sherryliuser/" aria-label="Instagram" className="text-gray-500 hover:text-red-700 hover:drop-shadow-md
          transition duration-300 ease-in-out transform hover:-translate-y-1">
            <FaInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/sherry-liu-0183a7167/" aria-label="LinkedIn" className="text-gray-500 hover:text-red-700 hover:drop-shadow-md
          transition duration-300 ease-in-out transform hover:-translate-y-1">
            <FaLinkedin size={30} />
          </a>
        </div>

        {/* life updates */}
        <div className="flex flex-col p-4 max-w-3xl med:mx-auto mx-3">
          <div className="sm:flex mb-4">
            <div className="sm:w-1/3">
              <h2 className="text-xl text-gray-800 mt-2">{lifeUpdates.title}</h2>
              <p className="text-xs text-gray-500 sm:ml-3 sm:p-2 my-1">{lifeUpdates.date}</p>
            </div>
            <div className="sm:w-2/3">
              <p className="text-gray-700">
                {lifeUpdates.content}
              </p>
            </div>
          </div>

        {/* divider */}
          <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-4 mx-auto" />

        {/* work updates */}
          <div className="sm:flex sm:my-0 my-4">
            <div className="sm:w-1/3">
              <h2 className="text-xl text-gray-800">{workUpdates.title}</h2>
              <div className="sm:mt-8">
                <p className="text-lg text-gray-800 sm:ml-10 sm:block hidden">currently</p>
                <p className="text-lg text-gray-800 md:mt-12 sm:mt-16 sm:ml-10 sm:block hidden">previously</p>
              </div>
            </div>
            <div className="sm:w-2/3">
            <p className="block sm:hidden text-lg text-gray-800 pt-3">currently</p>
              <div className="text-gray-700 my-2 sm:mt-10">
                {workUpdates.current}
              </div>
              <p className="block sm:hidden text-lg text-gray-800 pt-3">previously</p>
              <div className="text-gray-700 my-2 sm:mt-4">
                {workUpdates.previous}
              </div>
            </div>
          </div>

          {/* divider */}
          <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-4 mx-auto" />

          {/* featured projects section */}
          <div>
            <h2 className="text-xl text-gray-800 my-6">featured projects</h2>

            {/* projects container */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-6 sm:space-y-0">
              {featuredProjects.map((project, index) => (
                <a key={index} href={project.link} 
                  className="w-72 sm:w-1/2 md:w-1/3 lg:w-full bg-gray-100 
                  rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-52 object-cover" />
                  <div className="p-4">
                    <p className="text-gray-600 mt-1">{project.description}</p>
                    <p className="text-lg text-gray-900">{project.title}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* more link */}
            <div className="text-right mt-4">
              <a href="#" className="group relative text-gray-700 duration-300 ease-in-out hover:text-red-700 hover:drop-shadow-md">
                more →
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span>
                </a>
            </div>
          </div>

          {/* divider */}
          <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-4 mx-auto" />

          {/* contact me! */}
          <div id='contact' className='mb-4'>
            <h2 className="text-xl text-gray-800 my-6">let's be friends!</h2>

            {/* them buttons */}
            <div className='flex flex-col sm:flex-row items-center justify-center sm:space-x-10 space-y-6 sm:space-y-0'>
            <a href="mailto:sliu@college.harvard.edu"
              className="flex items-center justify-center bg-gray-100 rounded-full py-2 w-72 text-center shadow-lg 
              hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 space-x-2">
              <FaRegEnvelope className='text-gray-700 hover:text-gray-900' />
              <span className='text-sm text-gray-700 hover:text-gray-900'>sliu@college.harvard.edu</span> 
            </a>
              <a href="https://www.linkedin.com/in/sherry-liu-0183a7167/"
              className="flex items-center justify-center bg-gray-100 rounded-full py-2 w-72 text-center shadow-lg 
              hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 space-x-2">
              <FaLinkedin className='text-gray-700 hover:text-gray-900' /> 
              <span className='text-sm text-gray-700 hover:text-gray-900'>message me!</span> 
            </a>
          </div>
        </div>
    </div>

  </div>
  );
}
