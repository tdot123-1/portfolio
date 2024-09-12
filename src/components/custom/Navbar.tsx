import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { GitHubLogoIcon, HamburgerMenuIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Contact from "./Contact";
import { MailIcon } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-300 border-b-2 border-slate-600">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div>
            <NavLink to="/">Home (avatar)</NavLink>
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">
                  <HamburgerMenuIcon className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/projects">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/skills">Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Contact</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <span className="flex gap-1 justify-center items-center">
                          <MailIcon className="h-4 w-4" /> emailadress@test.com
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="flex gap-1 justify-center items-center">
                          <GitHubLogoIcon className="h-5 w-5" />
                          github/my-account
                        </span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span className="flex gap-1 justify-center">
                          <LinkedInLogoIcon className="h-5 w-5" />{" "}
                          linkedIn/my-profile
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
