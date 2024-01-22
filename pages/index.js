import '../tailwind.config'
import Link from 'next/link';
import { useEffect, useState, useRef, React } from 'react';
import { useRouter } from 'next/router';
import { lifeUpdates, workUpdates, featuredProjects } from '../components/indexdata';
import ProjectCard from '../components/projectcard';
import { FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';


export default function Home() {

  const router = useRouter();

  // role in the intro
  const [role, setRole] = useState('quantitative social scientist');
  const [opacity, setOpacity] = useState(1);  // State to control opacity

  const roles = ['product manager', 'product designer', 'quantitative social scientist'];
  const nextRole = () => roles[(roles.indexOf(role) + 1) % roles.length];

  const handleClick = () => {
    setOpacity(0);
    setTimeout(() => {
      setRole(nextRole());
      setOpacity(1);
    }, 200);
  };

  // scrolling down to contact
  useEffect(() => {
    const handleScrollToElement = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    const timeoutId = setTimeout(handleScrollToElement, 100); // 100 ms delay

    router.events.on('routeChangeComplete', handleScrollToElement);

    return () => {
      clearTimeout(timeoutId);
      router.events.off('routeChangeComplete', handleScrollToElement);
    };
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">

      {/* image */}
      <img src="/me2.jpg" alt="me!" className="rounded-full w-32 h-32 object-cover mr-1 my-12 mt-32 scale-125" />

      {/* introduction */}
      <h2 className="text-2xl font-semibold text-center">Hey! I'm Sherry.</h2>
      <p className="text-2xl font-semibold text-center mt-2">
        A {' '}
        <span className="role inline-block text-gray-500 hover:text-red-700 cursor-pointer" onClick={handleClick} style={{opacity: opacity, transition: 'opacity 0.3s ease, color 0.3s ease'}}>{role}</span>
        {' '} from Las Vegas.
      </p>
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
              <ProjectCard key={index} project={project} className="w-72 sm:w-1/2 md:w-1/3 lg:w-full" imgClassName="h-52" />
            ))}
          </div>

          {/* more link */}
          <div className="text-right mt-4">
            <Link href="/projects" passHref className="group relative text-gray-700 duration-300 ease-in-out hover:text-red-700 hover:drop-shadow-md">
              more →
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span>
            </Link>
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
