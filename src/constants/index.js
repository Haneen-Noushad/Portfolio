import { emirates,gbt } from "../assets/images";
import {
    c,
    cPlusPlus,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    illustrator,
    java,
    javascript,
    linkedin,
    microsoftExcel,
    mongodb,
    motion,
    mui,
    mysql,
    nextjs,
    nodejs,
    photoshop,
    php,
    powerBI,
    pricewise,
    python,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    }, 
    {
        imageUrl: nodejs,
        name: "Node js",
        type: "Frontend",
    },
    
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },   
    
   
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "Php",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "mySQL",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "programming",
    },
    {
        imageUrl: c,
        name: "C",
        type: "programming",
    },
    {
        imageUrl: cPlusPlus,
        name: "C++",
        type: "programming",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "programming",
    },
    {
        imageUrl: powerBI,
        name: "Power BI",
        type: "Data",
    },
    {
        imageUrl: microsoftExcel,
        name: "Excel",
        type: "Data",
    },
    {
        imageUrl: photoshop,
        name: "Photoshop",
        type: "designing",
    },
    {
        imageUrl: illustrator,
        name: "Illustrator",
        type: "designing",
    },   
    
];

export const experiences = [
    {
        title: "Intern",
        company_name: "Global Beam Telecom",
        icon: gbt,
        iconBg: "#accbe1",
        date: "Jan 2024 - June 2024 ",
        points: [
            "Collaborated closely with the marketing team to refresh and enhance the company website using the Laravel framework. ",
            "Made significant improvements in website by adding images, and formatting HTML and CSS to ensure a seamless user experience.",
            "Managed multiple social media accounts, with a focus on LinkedIn, ensuring brand consistency and high engagement across platforms.",
            "Created and curated compelling content for social media channels, effectively targeting and resonating with the audience to promote satellite and radio products.",            
        ],
    },
    {
        title: "HR Intern",
        company_name: "Emirates Group",
        icon: emirates,
        iconBg: "#fbc3bc",
        date: "Jun 2022 - Aug 2022",
        points: [
            "Engaged in data analytics within the HR Division to optimize insights and improve decision-making processes.",
            "Developed interactive dashboards and visual reports using Power BI to present data-driven insights.",
            "Ensuring business continuity by meticulously updating and maintaining the HR database with precise employee data, thereby facilitating smooth operations.",
            "Providing comprehensive support to the HR team by assisting with a variety of day-to-day tasks to streamline workflows and enhance efficiency.",          
        ],
    },    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'AGROS Website',
        description: `
        Orchestrated the complete design and development of a functional website from conception to execution, ensuring seamless user experience and intuitive navigation.
        Empowering farm owners by implementing predictive analytics tools to forecast crop yield and revenue generation`,
        link: 'https://atos-agros.web.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Image Steganography',
        description: 'Developed an image steganography system to conceal text, images, or videos within a cover image, utilizing AES encryption for enhanced data security.',
        link: '',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Rent A Car Application',
        description: 'Developed a comprehensive Java GUI-based car rental application encompassing rental and return processes, customer and admin authentication, rental price calculation, and data storage via file handling.',
        link: 'https://github.com/Haneen-Noushad/RentACar',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Credit Card Fraud Detection',
        description: 'Addressed class imbalance through advanced techniques to enhance robustness in model performance, refined training models to suit project requirements, and conducted thorough model testing utilizing diverse classification techniques.',
        link: '',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: `That's Cube Game`,
        description: 'Developed the Cube Game using Unity and C#, focusing on seamless gameplay and efficiency, while implementing techniques to ensure balanced difficulty levels for a beginner-friendly and enjoyable experience.',
        link: '',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Snake Game',
        description: `The Snake game is a classic arcade game where the player controls a snake that moves around a grid, 
        eating food to grow in length. The primary objective is to consume as much food as possible without running into the walls 
        or the snake's own body. Each piece of food eaten increases the score by one point.`,
        link: 'https://haneen-noushad.github.io/SnakeGame/',
    }
];