import '../tailwind.config'
import Link from 'next/link';

// featured Products data
export const featuredProjects = [
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

// ProjectCard.js
const ProjectCard = ({ project, className, imgClassName }) => {
  return (
    <Link href={project.link} passHref>
      <a className={`bg-gray-100 rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden ${className}`}>
        <img src={project.imageUrl} alt={project.title} className={`w-full object-cover ${imgClassName}`} />
        <div className="p-4">
          <p className="text-gray-600 mt-1">{project.description}</p>
          <p className="text-lg text-gray-900">{project.title}</p>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;



//   <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-6 sm:space-y-0">
//   {featuredProjects.map((project, index) => (
//     <a key={index} href={project.link} 
//       className="w-72 sm:w-1/2 md:w-1/3 lg:w-full bg-gray-100 
//       rounded-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden">
//       <img src={project.imageUrl} alt={project.title} className="w-full h-52 object-cover" />
//       <div className="p-4">
//         <p className="text-gray-600 mt-1">{project.description}</p>
//         <p className="text-lg text-gray-900">{project.title}</p>
//       </div>
//     </a>