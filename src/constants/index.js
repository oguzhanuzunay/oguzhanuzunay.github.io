import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  adcropper,
  kartelam,
  beko,
  insider,
  redqueen,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Web Developer",
    icon: web,
  },
  {
    title: "Next.js  Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Adcropper",
    icon: adcropper,
    iconBg: "#383E56",
    date: "June 2019 - Sep 2019",
    points: [
      "Hands-on experience with Vanilla JavaScript focusing on DOM manipulations, asynchronous programming, and Object-Oriented Programming.",
      "Builded e-mail template using HTML, CSS, and Vanilla JavaScript.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Kartelam.com",
    icon: kartelam,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Jan 2021",
    points: [
      "Gained hands-on experience as a Full Stack Developer in a test-driven environment, working on real projects using Git, and developing projects on React and backend services.",
      " Acquired work experience with Go, React, HTML, CSS, Javascript, and GitLab in a test-driven environment.",
    ],
  },
  {
    title: "Software Consultant",
    company_name: "Beko Global",
    icon: beko,
    iconBg: "#383E56",
    date: "Jan 2021 - Sep 2021",
    points: [
      "Provided first-line technical support for over 60 countries.",
      "Developed scripts to and reduce 90%-time cost for process of integrate countries languages into the system.",
      "Debugged and developed high-quality Landing Pages (LPs) using HTML, CSS, Javascript and React.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Insider",
    icon: insider,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Feb 2023",
    points: [
      "Served front end support to major corporate partners like Singapore Airlines, Samsung, Allianz, MAC, CNN, Adidas, Coco-Cola, and Toyota resolving unknown technical issues,  via 1:1 meetings and tickets by achieving 100% end-user satisfaction.",
      "Identified, fixed errors and handled customization requests %100 optimized performance in AI-driven products aiming to increase sales and maximize conversion rate for e-commerce partners.",
      "Managed technical integration processes (Shopify, Adobe Magento etc. and Hard code) via meetings with business partners, ensuring effective communication, problem-solving and maximum customer satisfaction.",
      "Released technical documents (code standards, team responsibilities, and scope etc.) for Global, MENA, and APAC Technical teams via Confluence.",
      "Developed and maintained the enterprise partners websites using HTML, CSS, JavaScript, and React.",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "Red Queen Fashion",
    icon: redqueen,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Managed the construction, administration, setup, test, and development phases of the company's website.",
      "Implemented SEO, Conversion Rate Optimization, and email/sms automation strategies on our website.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Oguzhan does.",
    name: "İlker Ayaz",
    designation: "Head of Operational Excellence",
    company: "INSIDER",
    image:
      "https://media.licdn.com/dms/image/C4E03AQGEd4inI2WAYA/profile-displayphoto-shrink_100_100/0/1574844247412?e=1704931200&v=beta&t=42hULlP0NnX9ztVf9y74B_-W7LEoNTyITXHitOvm8Kk",
  },
  {
    testimonial:
      "Oguzhan's creative and innovative solutions accelerated our development process considerably. He has a truly solution-oriented mind.",
    name: "Tuğba Saklakoğlu",
    designation: "Senior IT Lead and Senior Business Analyst",
    company: "ARÇELİK GLOBAL",
    image:
      "https://media.licdn.com/dms/image/D4D03AQGIRKzyVTTuhQ/profile-displayphoto-shrink_200_200/0/1665849402026?e=1704931200&v=beta&t=HkcCxafjhbXJDHuZpd--WHEhNaqBCheSM-WbW9Xayhs",
  },
  {
    testimonial:
      "After Oguzhan optimized our website, our traffic increased by 45% and conversion rate 15%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
