import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { motion } from "framer-motion";
import { Project } from "@/types/Project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="mx-auto my-5 relative w-80 h-96 perspective"
      whileHover={{ scale: 1.1, transition: { duration: 1 } }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className={`absolute w-full h-full  backface-hidden
        ${
          isFlipped ? "rotate-y-0" : "rotate-y-180"
        } transition-transform duration-700`}
      >
        <Card className="text-slate-600 bg-slate-100 p-4 shadow-lg h-full w-full">
          <CardHeader>
            <CardTitle className="text-center mb-2 underline">
              {project.title}
            </CardTitle>
            <CardDescription>{project.subtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{project.description}</p>
            <p>Deployed? y/n</p>
            <p>Technologies: {project.tech.map((techUsed) => (
              techUsed
            ))}</p>
          </CardContent>
          <CardFooter>
            <p>{project.link}</p>
          </CardFooter>
        </Card>
      </motion.div>
      <motion.div
        className={`absolute w-full h-full backface-hidden
        ${
          isFlipped ? "rotate-y-180" : "rotate-y-0"
        } transition-transform duration-700`}
      >
        <Card className="text-slate-600 bg-slate-100 shadow-lg h-full w-full">
          <CardHeader className="h-3/4">
            <img
              src="https://placehold.co/600x400"
              className="w-full h-full object-cover rounded-t-lg mb-2"
            />
            <CardTitle className="underline text-center">
              {project.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="py-4 italic text-sm">
            <p>Click for details</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
