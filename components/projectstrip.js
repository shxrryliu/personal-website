import '../tailwind.config'
import Link from 'next/link';
import { useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";

const ProjectStrip = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link href={project.link} passHref
            className={`relative block p-4 bg-gray-100 rounded-lg transition-transform transform duration-300 
                ease-in-out mb-4 no-underline 
                ${isHovered ? 'shadow-md -translate-y-1' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center">
                <project.Icon className={`text-xl sm:text-2xl flex-shrink-0 mr-4 
                    ${isHovered ? 'text-red-700' : 'text-gray-600'} duration-300`} />
                <div className="flex-grow pr-5">
                    <p className="text-sm pb-1 font-extralight">{project.tags}</p>
                    <h5 className={`text-base sm:text-lg ${isHovered ? 'text-red-900' : 'text-gray-800'} duration-300`}>{project.title}</h5>
                    <p className="text-sm sm:block hidden text-gray-700">{project.description}</p>
                </div>
                <GoArrowUpRight className={`text-xl sm:text-2xl absolute top-4 right-4 
                    ${isHovered ? 'text-red-700' : 'text-gray-600'} duration-300`} />
            </div>
        </Link>
    );
};

export default ProjectStrip;
