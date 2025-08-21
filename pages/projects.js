import '../tailwind.config'
import Link from 'next/link';
import ProjectCard from '../components/projectcard';
import { productDesign, quantitativeSociologyReports, engineeringReports } from '../components/projectdata';
import ProjectStrip from '../components/projectstrip';

import { motion } from 'framer-motion';
import { Section, ListStagger, Item, variants } from '../components/animationVariants';

export default function Projects() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants.container}
      className="flex flex-col items-center justify-center min-h-screen p-6"
    >
      {/* intro */}
      <Section>
        <h2 className="text-3xl font-semibold text-center mt-32 sm:mt-36">Projects.</h2>
        <p className='text-xs text-center pt-2 pb-10 text-gray-800'>[some of my work that i&apos;ve particularly enjoyed.]</p>
      </Section>

      {/* product design */}
      <Section className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:my-4'>
        <h3 className='pb-4 text-xl text-gray-800'>product design</h3>

        <ListStagger className='grid grid-cols-1 sm:grid-cols-2 sm:gap-16 gap-4'>
          {productDesign.map((project, index) => (
            <Item key={index}>
              <ProjectCard project={project} className="w-full h-full" imgClassName="h-44" />
            </Item>
          ))}
        </ListStagger>

        {/* more projects wip! */}
        <p className='sm:text-right text-center pt-6 text-gray-600 text-xs'>
          [more pages to come, featuring a design project called <br className='sm:block hidden' />
          <a className='font-medium text-gray-700'>The Talk</a>, an inclusive sex-ed platform for LGBTQ+ youth]
        </p>
      </Section>

      {/* divider */}
      <Section className='max-w-3xl w-full mx-auto'>
        <hr className="border-t border-gray-700 w-1/2 my-6 mx-auto" />
      </Section>

      {/* more t4sg projects */}
      <Section className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:mt-4'>
        <p className='text-lg pb-4 text-gray-800'>
          as the <a className='font-medium'>director of product research & design</a> @{' '}
          <Link
            href="https://socialgood.hcs.harvard.edu/"
            className="group relative text-red-700 hover:text-red-900 transition duration-300"
            passHref
          >
            tech for social good
          </Link>, i also coordinated 8 teams of 3-4 designers to research, design, and handoff impactful tech for:
        </p>

        <ListStagger className="list-disc list-inside mx-6 text-gray-700 space-y-3">
          <Item>
            <span>
              <Link href='https://www.usaid.gov/' className='text-red-700 hover:text-red-900 transition duration-300'>USAID</Link>&apos;s disaster donation guide to optimize our national responses to natural disasters.
            </span>
          </Item>
          <Item>
            <span>
              <Link href='https://www.fs.usda.gov/' className='text-red-700 hover:text-red-900 transition duration-300'>USDA Forest Service</Link>&apos;s National Asset Management Program (NAMP) to aggregate data and streamline project proposal approval for projects saving our nation&apos;s forests.
            </span>
          </Item>
          <Item>
            <span>
              <Link href='https://www.boston.gov/' className='text-red-700 hover:text-red-900 transition duration-300'>City of Boston</Link>&apos;s Sportsfinder to help working parents find afterschool enrichment activities for K-12 kids, simultaneously reducing the cost of childcare.
            </span>
          </Item>
          <Item>
            <span>
              <Link href='https://www.hamiltonfamilies.org/' className='text-red-700 hover:text-red-900 transition duration-300'>Hamilton Families</Link>, San Francisco&apos;s leading service provider to families experiencing homelessness.
            </span>
          </Item>
          <Item>
            <span>
              <Link href='https://poverty-action.org/' className='text-red-700 hover:text-red-900 transition duration-300'>Innovations for Poverty Action</Link>, a research organization dedicated to improving the lives of people living in poverty.
            </span>
          </Item>
          <Item>
            <span>
              <Link href='https://healthinharmony.org/' className='text-red-700 hover:text-red-900 transition duration-300'>Health in Harmony</Link>, an international nonprofit dedicated to reversing global heating by collaborating with rainforest communities.
            </span>
          </Item>
          <Item>
            <span>
              <Link href='https://rfcx.org/' className='text-red-700 hover:text-red-900 transition duration-300'>Rainforest Connection</Link>, a nonprofit focused on preventing deforestation, where we enhanced the user experience of their scientific tools.
            </span>
          </Item>
        </ListStagger>

        <p className='text-lg pb-4 text-gray-80 mt-8 font-medium text-center'>
          <Link
            href='https://drive.google.com/drive/folders/1NQttAiSYES-7Qi1fE6_oK8PAjN9MAuG2?usp=sharing'
            className="group relative text-red-700 hover:text-red-900 transition duration-300"
            passHref
          >
            read the final design reports
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </p>
      </Section>

      {/* divider */}
      <Section className='max-w-3xl w-full mx-auto'>
        <hr className="border-t border-gray-700 w-1/2 my-6 mx-auto" />
      </Section>

      {/* quantitative soc reports */}
      <Section className='max-w-3xl w-full p-4 md:mx-auto mx-3 mt-4'>
        <h3 className='text-xl pb-4 text-gray-800'>quantitative sociology reports</h3>

        <ListStagger className="flex flex-col gap-4">
          {quantitativeSociologyReports.map((project, index) => (
            <Item key={index}>
              <ProjectStrip project={project} />
            </Item>
          ))}
        </ListStagger>
      </Section>

      {/* divider */}
      <Section className='max-w-3xl w-full mx-auto'>
        <hr className="border-t border-gray-700 w-1/2 my-6 mx-auto" />
      </Section>

      {/* engineering reports */}
      <Section className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:my-4'>
        <h3 className='text-xl pb-4 text-gray-800'>engineering reports</h3>

        <ListStagger className="flex flex-col gap-4">
          {engineeringReports.map((project, index) => (
            <Item key={index}>
              <ProjectStrip project={project} />
            </Item>
          ))}
        </ListStagger>
      </Section>

      {/* footer note */}
      <Section className='max-w-3xl w-full p-4 md:mx-auto mx-3 sm:mt-4'>
        <p className='text-lg pb-4 text-gray-500 text-right'>...more to come in 2024 :)</p>
      </Section>
    </motion.div>
  );
}
