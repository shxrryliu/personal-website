import '../tailwind.config'
import ProjectCard from '../components/projectcard';

const productDesign = [
    {
        title: "project one",
        description: "description.",
        imageUrl: "/project-one.jpg",
        link: "#",
    },
    {
        title: "project two",
        description: "description.",
        imageUrl: "/project-two.jpg",
        link: "#",
    },
]

const quantitativeSociologyReports = [
    {
        title: "project one",
        description: "description.",
        imageUrl: "/project-one.jpg",
        link: "#",
    },
    {
        title: "project one",
        description: "description.",
        imageUrl: "/project-one.jpg",
        link: "#",
    },
    {
        title: "project one",
        description: "description.",
        imageUrl: "/project-one.jpg",
        link: "#",
    },
];

const engineeringReports = [
    {
        title: "project one",
        description: "description.",
        imageUrl: "/project-one.jpg",
        link: "#",
    },
];

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            {/* intro */}
            <h2 className="text-3xl font-semibold text-center mt-36">Projects.</h2>
            <p className='text-xs text-center pt-2 pb-10 text-gray-800'>[some of my work that i've particularly enjoyed.]</p>

            {/* product design */}
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 my-4'>
                <h3 className='pb-4 text-xl text-gray-800'>product design</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-16 gap-4'>
                    {productDesign.map((project, index) => (
                        <ProjectCard key={index} project={project} className="w-full h-64" imgClassName="h-44" />
                        ))}
                </div>
            </div>
            <div className='max-w-3xl w-full p-4 md:mx-auto mx-3 my-4'>
                <h3 className='text-xl pb-4 text-gray-800'>quantitative sociology reports</h3>
            </div>
        </div>
    )
}