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

const ProjectCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="mx-auto my-11 relative w-80 h-96 perspective"
      whileHover={{ scale: 1.1, transition: { duration: 1 } }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className={`absolute w-full h-full  backface-hidden
        ${
          isFlipped ? "rotate-y-0" : "rotate-y-180"
        } transition-transform duration-700`}
      >
        <Card className="text-slate-600 bg-slate-100 p-4 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center mb-2 underline">Project title</CardTitle>
            <CardDescription>Project subtitle</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Project description</p>
            <p>Deployed? y/n</p>
            <p>Tech used</p>
          </CardContent>
          <CardFooter>
            <p>Link to project</p>
          </CardFooter>
        </Card>
      </motion.div>
      <motion.div
        className={`absolute w-full h-full backface-hidden
        ${
          isFlipped ? "rotate-y-180" : "rotate-y-0"
        } transition-transform duration-700`}
      >
        <Card className="text-slate-600 bg-slate-100 shadow-lg">
          <CardHeader>
            <img
              src="https://placehold.co/600x400"
              className="w-full h-50 object-cover rounded-t-lg mb-2"
            />
            <CardTitle className="underline text-center">Project Title</CardTitle>
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
