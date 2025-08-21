import '../tailwind.config'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { lifeUpdates, workUpdates, featuredProjects } from '../components/indexdata';
import ProjectCard from '../components/projectcard';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import { SiSubstack } from "react-icons/si";

import { motion } from 'framer-motion';
import { Section, variants } from '../components/animationVariants';

export default function Home() {
  const router = useRouter();

  // rotating role text
  const [role, setRole] = useState('product manager');
  const [opacity, setOpacity] = useState(1);
  const roles = ['quantitative social scientist', 'product manager', 'product designer'];
  const nextRole = () => roles[(roles.indexOf(role) + 1) % roles.length];
  const handleClick = () => {
    setOpacity(0);
    setTimeout(() => {
      setRole(nextRole());
      setOpacity(1);
    }, 200);
  };

  // smooth scrolling to hash links
  useEffect(() => {
    const handleScrollToElement = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    const timeoutId = setTimeout(handleScrollToElement, 100);
    router.events.on('routeChangeComplete', handleScrollToElement);
    return () => {
      clearTimeout(timeoutId);
      router.events.off('routeChangeComplete', handleScrollToElement);
    };
  }, [router]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants.container}
      className="flex flex-col items-center justify-center min-h-screen p-4"
    >
      {/* header*/}
      <Section>
        <div className="flex flex-col items-center justify-center">
          <img
            src="/me2.jpg"
            alt="me!"
            className="rounded-full w-32 h-32 object-cover my-12 mt-32 scale-125"
          />
          <h2 className="text-2xl font-semibold text-center">Hey! I&apos;m Sherry.</h2>
          <p className="text-2xl font-semibold text-center mt-2">
            A{' '}
            <span
              className="role inline-block text-gray-500 hover:text-red-700 cursor-pointer"
              onClick={handleClick}
              style={{
                opacity,
                transition: 'opacity 0.3s ease, color 0.3s ease',
              }}
            >
              {role}
            </span>{' '}
            from Las Vegas.
          </p>
          <p className="text-center mt-4 mb-8 text-gray-800">
            I’m passionate about socially-minded tech development.
          </p>

          <div className="flex space-x-16 mb-12">
            <a
              href="https://github.com/shxrryliu"
              aria-label="Github"
              className="text-gray-500 hover:text-red-700 hover:drop-shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/sherry-liu-0183a7167/"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-red-700 hover:drop-shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://sherryliuser.substack.com/"
              aria-label="Substack"
              className="mt-1 text-gray-500 hover:text-red-700 hover:drop-shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <SiSubstack size={25} />
            </a>
          </div>
        </div>
      </Section>

      {/* 2. Life Updates */}
      <Section className="flex flex-col p-4 max-w-3xl med:mx-auto mx-3">
        <div className="sm:flex mb-4">
          <div className="sm:w-1/3">
            <h2 className="text-xl text-gray-800 mt-2">{lifeUpdates.title}</h2>
            <p className="text-xs text-gray-500 sm:ml-3 sm:p-2 my-1">
              {lifeUpdates.date}
            </p>
          </div>
          <div className="sm:w-2/3">
            <p className="text-gray-700">{lifeUpdates.content}</p>
          </div>
        </div>
      </Section>

      {/* Divider */}
      <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-4 mx-auto" />


      {/* 3. Work Updates */}
      <Section className="flex flex-col p-4 max-w-3xl med:mx-auto mx-3">
        <div className="sm:flex sm:my-0 my-4">
          <div className="sm:w-1/3">
            <h2 className="text-xl text-gray-800">{workUpdates.title}</h2>
            <div className="sm:mt-8">
              <p className="text-lg text-gray-800 sm:ml-10 sm:block hidden">
                currently
              </p>
              <p className="text-lg text-gray-800 md:mt-12 sm:mt-16 sm:ml-10 sm:block hidden">
                previously
              </p>
            </div>
          </div>
          <div className="sm:w-2/3">
            <p className="block sm:hidden text-lg text-gray-800 pt-3">
              currently
            </p>
            <div className="text-gray-700 my-2 sm:mt-10">
              {workUpdates.current}
            </div>
            <p className="block sm:hidden text-lg text-gray-800 pt-3">
              previously
            </p>
            <div className="text-gray-700 my-2 sm:mt-4">
              {workUpdates.previous}
            </div>
          </div>
        </div>
      </Section>

      {/* Divider */}
      <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-4 mx-auto" />

      {/* 4. Featured Projects */}
      <Section className="flex flex-col p-4 max-w-3xl med:mx-auto mx-3">
        <h2 className="text-xl text-gray-800 my-6">featured projects</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-6 sm:space-y-0"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              className="w-72 sm:w-1/2 md:w-1/3 lg:w-full"
              imgClassName="h-52"
            />
          ))}
        </motion.div>

        <div className="text-right mt-4">
          <Link
            href="/projects"
            passHref
            className="group relative text-gray-700 duration-300 ease-in-out hover:text-red-700 hover:drop-shadow-md"
          >
            more →
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </div>
      </Section>

      {/* Divider */}
      <hr className="border-t border-gray-700 w-1/2 sm:my-12 my-4 mx-auto" />

      {/* 5. Let's Be Friends */}
      <Section id="contact" className="flex flex-col p-4 max-w-3xl med:mx-auto mx-3 mb-4">
        <h2 className="text-xl text-gray-800 my-6">let&apos;s be friends!</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-10 space-y-6 sm:space-y-0">
          <a
            href="mailto:sherryliu083@gmail.com"
            className="flex items-center justify-center bg-gray-100 rounded-full py-2 w-72 text-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 space-x-2"
          >
            <FaRegEnvelope className="text-gray-700 hover:text-gray-900" />
            <span className="text-sm text-gray-700 hover:text-gray-900">
              sherryliu083@gmail.com
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/sherry-liu-0183a7167/"
            className="flex items-center justify-center bg-gray-100 rounded-full py-2 w-72 text-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 space-x-2"
          >
            <FaLinkedin className="text-gray-700 hover:text-gray-900" />
            <span className="text-sm text-gray-700 hover:text-gray-900">
              message me!
            </span>
          </a>
        </div>
      </Section>
    </motion.div>
  );
}
