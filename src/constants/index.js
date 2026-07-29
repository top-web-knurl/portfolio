import {
  mobile,
  backend,
  creator,
  web,

  html,
  css,
  javascript,
  reactjs,
  php,
  mysql,

  artweb,
  freelance,
  carrent,
  jobit,
  tripguide,

  mail,
  telegram,
} from "../assets";

export const navLinks = [{
    id: "about",
    title: "Про меня",
  },
  {
    id: "work",
    title: "Работы",
  },
  {
    id: "contact",
    title: "Связаться",
  },
];

const aboutUs = {
  name: "Тимур",
  greeting: "Здравствуйте, меня зовут",
  descriprion1: "Я - веб-разработчик, с более 6+ лет опыта, создающий уникальные и функциональные веб-сайты и веб-приложения.",
  descriprion2: "Моя работа - превращать ваши идеи в реальность и делать интернет лучше!",
};

const services = [{
    title: "Frontend",
    desc: "HTML, CSS, JavaScript",
    icon: web,
  },
  {
    title: "Framework",
    desc: "React, Next, TypeScript",
    icon: mobile,
  },
  {
    title: "Backend",
    desc: "CMS, PHP, MySQL",
    icon: backend,
  },
  {
    title: "Оптимизация",
    desc: "SEO, Performance, Security",
    icon: creator,
  },
];

const technologies = [{
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const contacts = [{
    name: "Telegram",
    icon: telegram,
    iconColor: "#27a7e7",
    href: 'https://t.me/web_samurai'
  },
  {
    name: "mail",
    icon: mail,
    iconColor: "#e6c8ff",
    href: "mailto:achilovtima@yandex.ru"
  },

];

const experiences = [{
    title: "Фриланс: вёрстка сайтов, поддержка",
    desc: "Фриланс: вёрстка сайтов, поддержка",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "Январь 2020 - Февраль 2021",
  },
  {
    title: "Веб-студия: веб-разработка",
    desc: "Веб-студия: веб-разработка",
    company_name: "artweb",
    icon: artweb,
    iconBg: "#383E56",
    date: "Февраль 2021 - Настоящее время",
  },
];

const testimonials = [{
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [{
    name: "Car Rent",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [{
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
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [{
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
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [{
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

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  aboutUs,
  contacts
};