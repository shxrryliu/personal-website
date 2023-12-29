// import Link from "next/link";
// import { useRouter } from "next/router";

// const navOptions = [
//   {
//     title: 'about',
//     link: '/about'
//   },
//   {
//     title: 'projects',
//     link: '/projects'
//   },
//   // {
//   //     title:'writing',
//   //     link:'/writing',
//   // },
//   {
//     title: 'contact',
//     link: '/#contact'
//   },
// ]

// export default function Header() {

//   const router = useRouter();

//   const handleNavigation = (e, option) => {
//     if (option.link.startsWith('/#')) {
//       // anchor link
//       e.preventDefault();
//       const path = option.link.substring(2);

//       if (router.pathname === '/') {
//         // if on home page, smooth scroll
//         document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
//       } else {
//         // else nav to home page then scroll
//         router.push('/').then(() => window.scrollTo(0, document.querySelector(path).offsetTop));
//       }
//     }
//   };

//   return (
//     <header className="w-full bg-gray-100 py-4 px-6 fixed top-0 z-10 opacity-75">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         {/* upper left corner */}
//         <Link href="/" passHref className="group relative inline-block text-xl font-bold text-gray-800 hover:text-black">
//           <span className="inline-block">s</span>
//           <span className="absolute left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">herry</span>
//           <span className="inline-block transition-all duration-500 ease-in-out transform group-hover:translate-x-14 pl-0">liu</span>
//         </Link>


//         {/* nav links */}
//         <nav>
//           <ul className="flex space-x-3 sm:space-x-8">
//             {navOptions.map((option) => (
//               <li key={option.title}>
//                 {/* <Link href={option.link} passHref></Link> */}
//                 <Link href={option.link} passHref onClick={(e) => handleNavigation(e, option)}
//                   className="group relative text-gray-800 hover:text-red-800 transition duration-300">
//                   {option.title}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from 'react';

const navOptions = [
  {
    title: 'about',
    link: '/about'
  },
  {
    title: 'projects',
    link: '/projects'
  },
  {
    title: 'contact',
    link: '/#contact'
  },
];

export default function Header() {
  return (
    <header className="w-full bg-gray-100 py-4 px-6 fixed top-0 z-10 opacity-75">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" passHref
          className="group relative inline-block text-xl font-bold text-gray-800 hover:text-black">
            <span className="inline-block">s</span>
            <span className="absolute left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">herry</span>
            <span className="inline-block transition-all duration-500 ease-in-out transform group-hover:translate-x-14 pl-0">liu</span>
        </Link>
        <nav>
          <ul className="flex space-x-3 sm:space-x-8">
            {navOptions.map((option) => (
              <li key={option.title}>
                <a href={option.link} className="group relative text-gray-800 hover:text-red-800 transition duration-300">
                  {option.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
