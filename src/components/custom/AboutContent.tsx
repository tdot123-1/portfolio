import { useState } from "react";
import { aboutData } from "@/data/aboutData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Separator } from "../ui/separator";
import { AnimatePresence, motion } from "framer-motion";

const AboutContent = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // change current page content, animation direction
  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < aboutData.length) {
      setDirection(newPage > currentPage ? 1 : -1);
      setCurrentPage(newPage);
    }
  };

  // animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="relative flex flex-col items-center">
      <div className="relative w-full flex justify-center h-80">
        <AnimatePresence initial={false} custom={direction}>
          <motion.article
            key={currentPage} 
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }} 
            className="bg-slate-400 text-slate-200 border shadow-lg p-5 rounded-md mx-auto my-11 w-5/6 h-full md:w-3/6 lg:w-1/3 absolute" 
          >
            <div className="flex justify-between mb-3 pb-2">
              <h3 className="text-xl font-bold ">
                {aboutData[currentPage].title}
              </h3>
              <span className="text-sm">{currentPage + 1}/5</span>
            </div>
            <Separator className="my-3" />
            <p>{aboutData[currentPage].content}</p>
          </motion.article>
        </AnimatePresence>
      </div>
      <Pagination className="my-12 text-slate-700">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="hover:cursor-pointer aria-disabled:cursor-not-allowed"
              aria-disabled={currentPage === 0}
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          <div className="hidden sm:flex">
            {aboutData.map((_, index) => (
              <PaginationItem key={index} className="hover:cursor-pointer">
                <PaginationLink
                  isActive={index === currentPage}
                  onClick={() => handlePageChange(index)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </div>
          <PaginationItem>
            <PaginationNext
              className="hover:cursor-pointer aria-disabled:cursor-not-allowed"
              aria-disabled={currentPage === aboutData.length - 1}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default AboutContent;
