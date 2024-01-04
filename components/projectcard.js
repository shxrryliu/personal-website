import '../tailwind.config'
import Link from 'next/link';

const ProjectCard = ({ project, className, imgClassName }) => {
  return (
    <Link href={project.link} passHref className={`bg-gray-100 rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden ${className}`}>
        <img src={project.imageUrl} alt={project.title} className={`w-full object-cover ${imgClassName}`} />
        <div className="p-4">
          <p className="text-gray-600 mt-1">{project.description}</p>
          <p className="text-lg text-gray-900">{project.title}</p>
        </div>
    </Link>
  );
};

export default ProjectCard;