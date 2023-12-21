import styles from './home.module.css';
import '../tailwind.config'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';


const lifeUpdates = [
    { timestamp: '00:00:00 PST', 
    content: 'back in Vegas! focusing on self care. exploring interesting classes for my last semester. brainstorming personal projects. trying to read more and keep up with my podcasts. ' },
  ];

const workUpdates = {
    current: 'finishing my degree in Applied Mathematics in Sociology...',
    previous: 'director of product research & design at Tech for Social Good...',
    // Add the rest of your work update content here
  };

export default function Home() {
    return (
      <div className={styles.container}>
        <h2 className={styles.intro}>Hey! I'm Sherry.<br></br>
        A quantitative social scientist from Las Vegas.</h2>
        <p className={styles.subtitle}>I’m passionate about socially-minded tech development.</p>

        <div className={styles.socialIcons}>
        <a href="https://github.com/shxrryliu" aria-label="Github"><FaGithub size={30} color='gray'/></a>
        <a href="https://www.instagram.com/sherryliuser/" aria-label="Instagram"><FaInstagram size={30} color='gray'/></a>
        <a href="https://www.linkedin.com/in/sherry-liu-0183a7167/" aria-label="LinkedIn"><FaLinkedin size={30} color='gray'/></a>
        </div>

      <section className={styles.updateSection}>
        <h3>Life Updates</h3>
        {lifeUpdates.map((update, index) => (
          <div key={index}>
            <p>{update.timestamp}</p>
            <p>{update.content}</p>
          </div>
        ))}
      </section>
      
      <section>
        <h2>Work Updates</h2>
        <div>
          <h3>Currently</h3>
          <p>{workUpdates.current}</p>
        </div>
        <div>
          <h3>Previously</h3>
          <p>{workUpdates.previous}</p>
        </div>
      </section>

      </div>
    );
  }