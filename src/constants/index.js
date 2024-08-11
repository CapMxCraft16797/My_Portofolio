import api from "../assets/projects/api-project.png";
import crud from "../assets/projects/crud-project.png";
import prayers from "../assets/projects/prayers-project.png";
import dashboard from "../assets/projects/dashboard-project.png";

export const HERO_CONTENT = `I am an experienced front-end engineer, I have a proven track record of delivering high-performing, visually stunning web applications that delight users and drive business success. With a deep understanding of HTML, CSS, JavaScript, and various front-end frameworks and libraries, I specialize in crafting responsive, accessible, and optimized user interfaces.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I'm a front-end engineer with a deep passion for building visually stunning and highly performant web applications. With a strong foundation in HTML, CSS, JavaScript, and various front-end frameworks, I specialize in crafting user-centric interfaces that captivate and delight.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "CRUD Website",
    image: crud,
    description:
      "A full CRUD website which enables you to create, remove, update products.",
    technologies: ["HTML", "CSS", "JS"],
    website: "https://capmxcraft16797.github.io/CRUD-project/",
  },
  {
    title: "Prayer Times API Project",
    image: prayers,
    description:
      "A prayer times website which depends on API and display the prayer times according to the selected city.",
    technologies: ["HTML", "CSS", "JS"],
    website: "https://capmxcraft16797.github.io/prayer-times-project/",
  },
  {
    title: "DashBoard",
    image: dashboard,
    description:
      "A dashboard to demonstrate number of users, products, post and revenue of a certain brand.",
    technologies: ["HTML", "CSS"],
    website: "https://capmxcraft16797.github.io/prayer-times-project/",
  },
  {
    title: "API-Project",
    image: api,
    description:
      "An api application website with features like changing the content as you change the topic.",
    technologies: ["HTML", "CSS", "JS"],
    website: "https://capmxcraft16797.github.io/api-project/",
  },
];

export const CONTACT = {
  address: "1st Ain Shams St., Cairo, Egypt ",
  phoneNo: "+201126654938 ",
  email: "mostafaatef16797@gmail.com",
};
