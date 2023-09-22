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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
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
        "Gained hands-on experience with Pure (Vanilla) JavaScript focusing on DOM manipulations, asynchronous programming, and Object-Oriented Programming.",
        "Built tools/websites using HTML, CSS, and Vanilla JavaScript in real projects.",
      ],
    },
    {
      title: "Web Development Intern",
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
        "Developed scripts to integrate countries' languages into the system, speeding up this process by 90%.",
        "Debugged and developed high-quality Landing Pages (LPs) using JavaScript and CSS.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Technical Support Engineer",
      company_name: "Insider",
      icon: insider,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Feb 2023",
      points: [
        "Utilized Zendesk for ticket management and technical support, achieving 100% end-user satisfaction.",
        "Identified, fixed, and improved errors in AI-driven products aiming to increase sales for e-commerce partners, while gaining experience in frontend technologies such as JavaScript and React.",
        "Participated in 1:1 meetings with corporate partners to address their customization requests and reported issues, ensuring effective communication and problem-solving.",
        "Managed technical integration processes and meetings with business partners, gaining valuable experience with front-end development tools and practices.",
        "Prepared and shared a unified document (code standards, team responsibilities, and scope) for Global, MENA, and APAC Technical Support Engineering teams using Confluence."
      ],
    },
    {
      title: "Co-Founder",
      company_name: "Red Queen Fashion",
      icon: redqueen,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Present",
      points: [
        "Managed the construction, administration, setup, and development phases of the company's website.",
        "Integrated previous professional experiences and business management processes into my own company.",
        "Successfully implemented SEO, Conversion Rate Optimization, and email/sms automation strategies on our website.",
        "Successfully implemented SEO, Conversion Rate Optimization, and email/sms automation strategies on our website.",
        "Currently, our company is rapidly growing and preparing for international operations."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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