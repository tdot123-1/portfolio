import { NavLink } from "react-router-dom";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

import Contact from "./Contact";
import NavbarMobile from "./NavbarMobile";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-300 border-b-2 border-slate-600 backdrop-blur-md bg-opacity-80">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div>
            <NavLink to="/">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="text-slate-600 bg-slate-400 border-2 border-slate-600">TK</AvatarFallback>
              </Avatar>
            </NavLink>
          </div>

          {/* desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <HoverCard>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-slate-700 font-bold" : "text-slate-600"
                }
              >
                <HoverCardTrigger asChild>
                  <span className="hover:underline">About</span>
                </HoverCardTrigger>
              </NavLink>
              <HoverCardContent className="font-normal italic bg-slate-800 text-slate-200">
                Get to know more about me and my background
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "text-slate-700 font-bold" : "text-slate-600"
                }
              >
                <HoverCardTrigger asChild>
                  <span className="hover:underline">Projects</span>
                </HoverCardTrigger>
              </NavLink>
              <HoverCardContent className="font-normal italic bg-slate-800 text-slate-200">
                Look into some of the projects I've worked on
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive ? "text-slate-700 font-bold" : "text-slate-600"
                }
              >
                <HoverCardTrigger asChild>
                  <span className="hover:underline">Skills</span>
                </HoverCardTrigger>
              </NavLink>
              <HoverCardContent className="font-normal italic bg-slate-800 text-slate-200">
                Get an overview of some of my current skills, and techs I aim to
                add to my skillset
              </HoverCardContent>
            </HoverCard>
            <Contact />
          </div>

          {/* mobile */}
          <div className="md:hidden">
            <NavbarMobile />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
