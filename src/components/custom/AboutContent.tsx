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

const AboutContent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < aboutData.length) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section>
      <article className="border p-5 mx-auto my-11 w-5/6 h-80 md:w-3/6 lg:w-1/3">
        <h3>{aboutData[currentPage].title}</h3>
        <p>{aboutData[currentPage].content}</p>
      </article>
      <Pagination className="my-12 text-slate-700">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="hover:cursor-pointer aria-disabled:cursor-not-allowed"
              aria-disabled={currentPage === 0}
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          <div className="hidden md:flex">
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
