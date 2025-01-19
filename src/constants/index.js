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
  figma,
  docker,
  kingsoopers,
  mici,
  phidelt,
  pterodactyl,
  resume,
  gitweb,
  threejs,
  MAC,
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
    title: "IT Technical Support",
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
    title: "Cashier & Pickup Associate",
    company_name: "King Soopers",
    icon: kingsoopers,
    iconBg: "#E6DEDD", // Dark is 383E56, Light is E6DEDD
    date: "October 2018 - January 2022",
    points: [
      "Provided technical support to staff as the online pickup system was being implemented, troubleshooting software issues and improving workflow.",
      "Trained staff on using the new online pickup software, addressing system challenges and enhancing team efficiency.",
      "Assisted customers with online orders, ensuring a seamless shopping experience and resolving any issues that arose.",
      "Managed the online pickup area, ensuring orders were ready for customers and maintaining a clean and organized workspace.",
    ],
  },
  {
    title: "Delivery Driver",
    company_name: "Mici Handcrafted Italian",
    icon: mici,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - September 2022",
    points: [
      "Delivered food orders to customers in a timely and professional manner, ensuring customer satisfaction and repeat business.",
      "Provided excellent customer service, addressing customer concerns and resolving issues to ensure a positive experience.",
      "Maintained a clean and organized delivery vehicle, ensuring food safety and compliance with company standards.",
      "Collaborated with team members to coordinate delivery schedules and optimize delivery routes for efficiency.",
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
  {
    title: "Digitial Transformation Intern",
    company_name: "Mac Insurance",
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
];

//const testimonials = [
//  {
//    testimonial:
//      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//    name: "Sara Lee",
//    designation: "CFO",
//    company: "Acme Co",
//    image: "https://randomuser.me/api/portraits/women/4.jpg",
//  },
//  {
//    testimonial:
//      "I've never met a web developer who truly cares about their clients' success like Rick does.",
//    name: "Chris Brown",
//    designation: "COO",
//    company: "DEF Corp",
//    image: "https://randomuser.me/api/portraits/men/5.jpg",
//  },
//  {
//    testimonial:
//      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//    name: "Lisa Wang",
//    designation: "CTO",
//    company: "456 Enterprises",
//    image: "https://randomuser.me/api/portraits/women/6.jpg",
//  },
//];

const projects = [
  {
    name: "Pterodactyl Webserver",
    description:
      "A web-based control panel for managing game servers, built with PHP and React.",
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
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: pterodactyl,
    source_code_link: "https://panel.prisimry.org",
  },
  {
    name: "Resume Download",
    description:
      "To download my resume, click the link at the top right",
    tags: [
      {
        name: "resume",
        color: "blue-text-gradient",
      },
    ],
    image: resume,
    source_code_link: "https://drive.google.com/uc?export=download&id=1v8-9RIOrybgWSxgqaTU15nGsuuRjOaNR",
  },
  {
    name: "Github",
    description:
      "My github page, where you can see all of my projects and contributions",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: gitweb,
    source_code_link: "https://github.com/Colemichael16",
  },
];

export { services, technologies, experiences, projects };
