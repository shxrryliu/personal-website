import '../tailwind.config'
import { RiMentalHealthFill } from "react-icons/ri";
import { GiNigeria } from "react-icons/gi";
import { PiGraphLight, PiHeartbeatThin } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";

export const productDesign = [
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
        title: "Venmo Visualizations: Privacy Implications of Venmo’s Default Settings",
        description: "using network analysis to expose privacy implications of Venmo's default public settings",
        Icon: PiGraphLight,
        link: "https://medium.com/@sherryliu2002/a-brief-social-network-analysis-using-venmos-api-plus-privacy-related-concerns-e8003a04a1d2",
        tags:'social network analysis, privacy, python',
    },
    {
        title: "The Pulse of Pressure: Analysis of HRV Data for Stress Detection",
        description: "using electrocardiogram (ECG) data to visualize and detect different levels of stress via various classifiers",
        Icon: PiHeartbeatThin,
        link: "https://drive.google.com/file/d/1HN0hxJW4QCL6aYMyT_ymVNQGixo7h-G1/view?usp=sharing",
        tags:'PCA/LDA, classification, python',
    },

];