import {
  IconBrandCss3,
  IconBrandFramerMotion,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandStripe,
  IconBrandTailwind,
  IconBrandThreejs,
  IconBrandTypescript,
  IconBrandVite,
  IconCircleLetterE,
  IconCircleLetterF,
  IconJson,
  IconSql,
} from "@tabler/icons-react";

export const projectsData = [
  {
    id: 0,
    title: "Personal page",
    subtitle: "The site you're on right now",
    description: `This is a project I made to function as a personal portfolio. 
    Introducing myself, some projects that I've worked on, and some of my skills. 
    This is also an exercise to learn TypeScript and work with Tailwind CSS. 
    As you may notice, I was also experimenting with different animations using the Framer-motion package. 
    And I made my first 3D model with the help of Three.js (the spinning globe on the home page).`,
    image: "",
    tech: [
      { name: "React", icon: IconBrandReact },
      { name: "TypeScript", icon: IconBrandTypescript },
      { name: "TailwindCSS", icon: IconBrandTailwind },
      { name: "Vite", icon: IconBrandVite },
      { name: "Three.js", icon: IconBrandThreejs },
      { name: "FramerMotion", icon: IconBrandFramerMotion },
      { name: "HTML", icon: IconBrandHtml5 },
    ],
    deployed: true,
    link: "https://link-to-project",
  },
  {
    id: 1,
    title: "Untitled. Cap Store",
    subtitle: "A web store",
    description: `A full-stack online store using Express.js, React, and MongoDB. 
    The responsive frontend design ensures a seamless user experience across all devices, from mobile to desktop. 
    Implemented JWT-based authentication with role-based access control, allowing users to browse products, manage their cart, and securely complete purchases through Stripe integration. 
    Admin functionality includes inventory and order management within the same application, accessible only to authorized users.`,
    image: "",
    tech: [
      { name: "React", icon: IconBrandReact },
      { name: "JavaScript", icon: IconBrandJavascript },
      { name: "Vite", icon: IconBrandVite },
      { name: "Node.js", icon: IconBrandNodejs },
      { name: "Express.js", icon: IconCircleLetterE },
      { name: "MongoDB", icon: IconBrandMongodb },
      { name: "JWT", icon: IconJson },
      { name: "Stripe", icon: IconBrandStripe },
      { name: "CSS", icon: IconBrandCss3 },
      { name: "HTML", icon: IconBrandHtml5 },
    ],
    deployed: true,
    link: "https://link-to-project",
  },
  {
    id: 2,
    title: "Rewatchables",
    subtitle: "Collect your favorites",
    description: `A responsive and user-friendly platform, where users can perform full CRUD operations on their favorite shows and movies. 
    The app allows users to add, update, and delete entries, while accessing detailed information about each title, including where to watch them. 
    Integrated features include in-app movie trailer playback via the 'react-youtube' package and a suggestion engine that provides personalized recommendations.`,
    image: "",
    tech: [
      { name: "React", icon: IconBrandReact },
      { name: "JavaScript", icon: IconBrandJavascript },
      { name: "Vite", icon: IconBrandVite },
      { name: "Node.js", icon: IconBrandNodejs },
      { name: "CSS", icon: IconBrandCss3 },
      { name: "HTML", icon: IconBrandHtml5 },
    ],
    deployed: true,
    link: "https://link-to-project",
  },
  {
    id: 3,
    title: "Untitled Ninja Game",
    subtitle: "Reach the final level",
    description: `An engaging browser-based platformer game.
    Designed with multiple levels, each introducing new enemy types and increasing challenges. The game also includes immersive sound effects to enhance the player experience. 
    The single-page design allows seamless gameplay without any reloading, and a story unfolds as players progress through each level. This is probably my favorite project I have worked on so far. Try it out!`,
    image: "",
    tech: [
      { name: "JavaScript", icon: IconBrandJavascript },
      { name: "CSS", icon: IconBrandCss3 },
      { name: "HTML", icon: IconBrandHtml5 },
    ],
    deployed: true,
    link: "https://link-to-project",
  },
  {
    id: 4,
    title: "Word-Games",
    subtitle: "Test you vocabulary",
    description: `A web-based platform, featuring three interactive word games: a word-guessing game similar to Wordle, a word formation game inspired by Boggle, and a word chain game where each new word must include a letter from the previous one. 
    To ensure valid gameplay, user guesses are verified as existing English words using WordNet from the NLTK library, preventing random character strings. Users can register, log in, and track their progress by attempting to beat high scores stored in a SQLAlchemy-managed database. 
    `,
    image: "",
    tech: [
      { name: "Python", icon: IconBrandPython },
      { name: "Flask", icon: IconCircleLetterF },
      { name: "PostgreSQL", icon: IconSql },
      { name: "HTML", icon: IconBrandHtml5 },
      { name: "JavaScript", icon: IconBrandJavascript },
      { name: "CSS", icon: IconBrandCss3 },
    ],
    deployed: true,
    link: "https://link-to-project",
  },
];
