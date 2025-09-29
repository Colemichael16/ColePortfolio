import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  java,
  nodejs,
  git,
  docker,
  phidelt,
  pterodactyl,
  placemat,
  website,
  threejs,
  MAC,
  ubuntu,
  reactjs,
  cu,
  vizient,
  mitch,
  steve,
  andy,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "feedbacks",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "IT Support",
    icon: web,
  },
  {
    title: "Network Engineering",
    icon: mobile,
  },
  {
    title: "UX Developer",
    icon: backend,
  },
  {
    title: "Data Science",
    icon: creator,
  },
];
 //Orbs
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
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "docker",
    icon: docker,
  },
  {
    name: "ubuntu",
    icon: ubuntu,
  },
  {
    name: "react",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "Corporate IT Intern",
    company_name: "Vizient Inc",
    icon: vizient,
    iconBg: "#E6DEDD",
    date: "June 2025 - August 2025",
    points: [
      "Developed an Application using Microsoft Power Apps & Power Automate",
      "Collaborated with cross-functional teams to gather requirements and design user-friendly interfaces.",
      "Developed a system to transfer data between SQL Server and Sharepoint using Power Automate",
      "Finished documentation and user training materials for the application.",
      "Published V1 of the application to the company intranet. Titled 'Product Toolbox'",
      "Product Toolbox is a public database for users to find approved and unapproved applications within the company."
    ],
  },
  {
    title: "IT Help Desk and A/V Student Technician",
    company_name: "University of Colorado Boulder",
    icon: cu,
    iconBg: "#E6DEDD",
    date: "March 2025 - Current",
    points: [
      "Currently working as a student IT support specialist for the University of Colorado Boulder.",
      "Providing technical support to students, faculty, and staff, troubleshooting software and hardware",
      "Assisting with the deployment and maintenance of computer systems and peripherals.",
      "Collaborating with team members to address technical issues and improve IT services for the campus community.",
    ],
  },
  {
    title: "Digital Transformation Intern",
    company_name: "MAC Insurance & Financial Services, Inc.",
    icon: MAC,
    iconBg: "#E6DEDD",
    date: "May 2024 - August 2024",
    points: [
      "Trained employees on the use of financial and organizational tools, including E-Money, Redtail, Box, and Nitrogen (formerly Riskalyze).",
      "Assisted in the development and implementation of a new CRM system, improving data management and client communication.",
      "Successfully guided the company to shift the majority of its workflow online, implementing tools as said above and conducted training sessions to improve operational efficiency.",
      "Provided ongoing technical support and resources to ensure smooth adaptation of new digital tools.",
    ],
  },
  {
    title: "Risk Manager",
    company_name: "Phi Delta Theta",
    icon: phidelt,
    iconBg: "#E6DEDD",
    date: "September 2022 - July 2024",
    points: [
      "Organized and coordinated social events, balancing fraternity traditions with responsible event planning.",
      "Managed risk and liability for the fraternity, ensuring compliance with university policies and local laws.",
      "Developed and implemented risk management strategies to promote a safe and inclusive environment for all members.",
      "Collaborated with other officers and advisors to address risk management concerns and improve chapter operations.",
    ],
  },
];

//Will have this finished when I get my own testimonials from clients if not add something else interesting
const testimonials = [
  {
    testimonial:
      "What truly sets Cole apart is how he operates; he is focused, curious, perceptive, and always thinking one level deeper. He made a consistent impression (...) not only through the quality of his work but through the maturity and clarity he brought to every interaction. Engaged, adaptable, and already operating at a professional level. ",
    name: "Mitch T.",
    designation: "Sr. DEX Researcher",
    company: "Vizient Inc.",
    image: mitch,
    linkedin:"https://www.linkedin.com/in/mitch-trychta/"
  },
  {
    testimonial:
      "Cole made a strong impact during his internship at MAC Insurance & Financial Services, Inc. He quickly learned our financial softwares and helped us integrate them with each other, making our process smother with our customers. He consistenly demostrated professonalism, initaive, exicetment, with such a great attitude.",
    name: "Steve M.",
    designation: "CEO",
    company: "MAC Insurance & Financial Services, Inc.",
    image: steve,
    linkedin:"https://www.linkedin.com/in/steven-mclean-aif-a913a234/"
  },
//  {
//    testimonial:
//      "Cole has been an essential part of our IT team, providing top-notch support and solutions. His technical skills are impressive, and he consistently goes above and beyond to ensure our systems run smoothly. Cole's dedication and problem-solving abilities make him a standout professional in the IT field.",
//    name: "Andy K.",
//    designation: "LTS Server Admin",
//    company: "University Colorado Boulder.",
//    image: andy,
//    linkedin:"https://www.linkedin.com/in/andy-keenan-8458741/"
//  },
];

// Additional projects will be added in the future.
const projects = [
  {
    name: "Pterodactyl Webserver",
    description:
      "A web-based control panel for managing game servers, currently deployed on my personal server and hosting this website. Access it with username: test and password: password",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "DNS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: pterodactyl,
    source_code_link: "https://panel.prisimry.org",
  },
  {
    name: "Product Toolbox",
    description:
      "A paper talking about this project I worked on with Vizient.",
    tags: [
      {
        name: "Vizient",
        color: "orange-text-gradient",
      },
    ],
    image: placemat,
    source_code_link: "https://docs.google.com/document/d/1dU4Tf4VQa9MgO74rSYoYGp-noWgvNYsIFO9pB_NZI60/edit?usp=sharing",
  },
  {
    name: "Website Portfolio",
    description:
      "A website that showcases my work, skills, and experience over the last three years. Built using React, Tailwind, and Three.js.", 
    tags: [
      {
        name: "Website",
        color: "blue-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/Colemichael16/ColePortfolio",
  },
];

export { services, technologies, experiences, projects, testimonials };
