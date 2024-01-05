import '../tailwind.config'
import { RiMentalHealthFill } from "react-icons/ri";
import { GiNigeria } from "react-icons/gi";
import { PiHeartbeatThin } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";

export const productDesign = [
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
]

export const quantitativeSociologyReports = [
    {
        title: "A Markov model comparing suicide interventions with gun control",
        description: "a mathematical model that evaluates the effectiveness of population-wide mental health interventions, targeted clinical approaches, and gun control policies",
        Icon: RiMentalHealthFill,
        link: "https://drive.google.com/file/d/1eNVPMVPMsvWNO9VazdFu2PdGLNp48N6H/view?usp=sharing",
        tags:'markov chains, mental health, matlab',
    },
    {
        title: "Internet Use in Nigeria: A Needs-Assessment for Microsoft Airband",
        description: "an assessment of internet access and usage in Nigeria, focusing on the effectiveness of Microsoft's Airband initiative in bridging the digital divide",
        Icon: GiNigeria,
        link: "https://drive.google.com/file/d/1Ubg4T7nYvO4wWNIFptPWuqltWaR3lqEk/view?usp=sharing",
        tags:'corporate accountability, R',
    },
    {
        title: "Decoding Political Knowledge in the Social Media Era",
        description: "examines the effects of social media engagement on political knowledge and misinformation using the American National Election Studies",
        Icon: FaTwitter,
        link: "https://drive.google.com/file/d/1Hz7OZeZWqvqb-4hEHKrxlotHA8g_kTTD/view?usp=sharing",
        tags:'misinformation, twitter, facebook, R',
    },
];

export const engineeringReports = [
    {
        title: "The Pulse of Pressure: Analysis of HRV Data for Stress Detection",
        description: "using electrocardiogram (ECG) data to visualize and detect different levels of stress via various classifiers",
        Icon: PiHeartbeatThin,
        link: "https://drive.google.com/file/d/1HN0hxJW4QCL6aYMyT_ymVNQGixo7h-G1/view?usp=sharing",
        tags:'PCA/LDA, classification, python',
    },
];