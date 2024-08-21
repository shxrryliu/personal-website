import '../tailwind.config'
import Link from 'next/link';

export const lifeUpdates = {
    title: "life updates",
    date: '08/20/2024',
    content: 'moved to the Bay Area to start work (say hi!). looking for adventures, friends, hobbies, personal projects to fill my time. learning more about the intersection of tech and society.'
};

export const workUpdates = {
    title: "work updates",
    current: (
        <p>
            working on creating better, smarter education technology as an APM @ IXL Learning. thinking about volunteer/part-time opportunities between law x tech.
        </p>
    ),
    previous: (
        <p>
            graduated w/ a degree in Applied Math in Sociology. also:
            PM intern @ Microsoft, 
            director of product research & design @ {' '}
            <Link
                href="https://socialgood.hcs.harvard.edu/"
                className="group relative text-red-700 hover:text-red-900 transition duration-300"
                passHref
            >
                tech for social good
                {/* <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span> */}
            </Link>
            , SWE intern @ Neeva. 
        </p>
    ),
};

export const featuredProjects = [
    {
        title: "Discriminology Community Data Platform",
        description: "UX research, product design",
        imageUrl: "/projects/discriminology/cover2.png",
        link: "/projects/discriminology",
    },
    {
        title: "UNCDF Matanataki Waste Fee Payment Platform",
        description: "UX research, product design",
        imageUrl: "/projects/matanataki/cover.png",
        link: "/projects/matanataki",
    },
    {
      title: "The Pulse of Pressure: Analysis of HRV Data for Stress Detection",
      description: "signal processing, python",
      imageUrl: "/projects/heartbeatcover.png",
      link: "https://drive.google.com/file/d/1HN0hxJW4QCL6aYMyT_ymVNQGixo7h-G1/view?usp=sharing",
    },  ];