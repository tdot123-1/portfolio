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
import { Badge } from "../ui/badge";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

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
        <Card className="text-slate-600 bg-slate-100  shadow-lg h-full w-full">
          <CardHeader className="px-6 py-3">
            <CardTitle className="text-center mb-2 underline">
              {project.title}
            </CardTitle>
            <CardDescription className="italic">
              {project.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <ScrollArea className="h-32 w-full border-slate-600 border-2 rounded-md p-2">
              <p className="text-sm">{project.description}</p>
            </ScrollArea>
            <div>
              {project.deployed && (
                <Badge className="bg-slate-700 hover:bg-slate-500">
                  Deployed
                </Badge>
              )}
            </div>
            <div>
              <p className="mb-1">Technologies used:</p>
              <ScrollArea className="w-full whitespace-nowrap ">
                <ul className="flex gap-2 justify-between">
                  {project.tech.map((techUsed) => (
                    <li
                      key={techUsed.name}
                      className="flex flex-col items-center"
                    >
                      <techUsed.icon />
                      <span className="text-xs">{techUsed.name}</span>
                    </li>
                  ))}
                </ul>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
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
