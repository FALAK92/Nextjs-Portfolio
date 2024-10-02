import {Link, ProjectInfo} from "@/lib/types";

export const links: Link[] = [
    {
        nameEng: "Home",
        hash: "#home",
    },
    {
        nameEng: "About",
        hash: "#about",
    },
    {
        nameEng: "Projects",
        hash: "#projects",
    },
    {
        nameEng: "Skills",
        hash: "#skills",
    },
    {
        nameEng: "Contact",
        hash: "#contact",
    },
]

export const projectsData: ProjectInfo[] = [
    {
        title: "Netflix clone",
        description:"The Netflix Clone is a replica of the popular streaming service designed to provide users with an immersive experience similar to Netflix. Built using modern web technologies.",
        tags: ['HTML','CSS','Bootstrap'],
        imageUrl: "/image1.png",
        link: "https://github.com/FALAK92/netflix-clone.git",
    },
    {
        title: "Quiz App",
        description:"The Quiz App is a dynamic and user-friendly platform designed for engaging users with interactive quizzes across various topics. Built with HTML, CSS, and JavaScript.",
        tags: ['HTML','CSS','Javascript'],
        imageUrl: "/image2.png",
        link: "https://github.com/FALAK92/quizapp.git",
    },
    {
        title: "Portfolio",
        description: "This portfolio website is designed to highlight my skills, projects, and journey as a web developer. It serves as a professional platform where I can showcase my work, ranging from web development to design.",
        tags: ['HTML','CSS','Javascript'],
        imageUrl: "/image3.png",
        link: "https://github.com/FALAK92/portfolio.git",
    },
    {
        title: "Student Management System",
        description: "The Student Management System (SMS) is a comprehensive web application designed to streamline the management of student data for schools, colleges, and educational institutions.",
        tags: ['Typescript'],
        imageUrl: "/image4.png",
        link: "https://github.com/FALAK92/student-management-system.git",
    },
]

export const skillsData:string[] = [
    "HTML",
    "CSS",
    "TypeScript",
    "JavaScript",
    "Tailwind",
    "Bootstrap",
    "NextJs",
    "Framer Motion",
    "Git",
    "Node.js",
    "React",
]