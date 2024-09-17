import {
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
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
      { name: "Vite", icon: IconBrandVite}
    ],
    deployed: true,
    link: "https://link-to-project",
  },
  {
    id: 1,
    title: "",
    subtitle: "",
    description: "",
    image: "",
    tech: [],
    deployed: true,
    link: "",
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    description: "",
    image: "",
    tech: [],
    deployed: true,
    link: "",
  },
  {
    id: 3,
    title: "",
    subtitle: "",
    description: "",
    image: "",
    tech: [],
    deployed: true,
    link: "",
  },
];
