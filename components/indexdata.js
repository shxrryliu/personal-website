import '../tailwind.config'
import Link from 'next/link';

export const lifeUpdates = {
    title: "life updates",
    date: '12/21/2023',
    content: 'back in Vegas! focusing on self care. exploring interesting classes for my last semester. brainstorming personal projects. trying to read more and keep up with my favorite podcasts.'
};

export const workUpdates = {
    title: "work updates",
    current: (
        <p>
            finishing my degree in Applied Mathematics in Sociology, incoming product
            manager @ Microsoft, and a teaching fellow for Harvard's{' '}
            <Link
                href="https://canvas.harvard.edu/courses/123847/assignments/syllabus"
                className="group relative text-red-700 hover:text-red-900 transition duration-300"
                passHref
            >
                technology & privacy class
                {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span> */}
            </Link>
            .
        </p>
    ),
    previous: (
        <p>
            director of product research & design @ {' '}
            <Link
                href="https://socialgood.hcs.harvard.edu/"
                className="group relative text-red-700 hover:text-red-900 transition duration-300"
                passHref
            >
                tech for social good
                {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span> */}
            </Link>
            , software
            engineer intern @ Neeva (now Snowflake), product development intern @
            Companion Home.
        </p>
    ),
};

export const featuredProjects = [
    {
        title: "Discriminology Community Data Platform",
        description: "UX research, product design",
        imageUrl: "/projects/discriminology/cover2.png",
        link: "#",
    },
    {
        title: "UNCDF Matanataki Waste Fee Payment Platform",
        description: "UX research, product design",
        imageUrl: "/projects/matanataki/cover.png",
        link: "#",
    },
    {
      title: "The Pulse of Pressure: Analysis of HRV Data for Stress Detection",
      description: "signal processing, python",
      imageUrl: "/projects/heartbeatcover.png",
      link: "https://drive.google.com/file/d/1HN0hxJW4QCL6aYMyT_ymVNQGixo7h-G1/view?usp=sharing",
    },  ];