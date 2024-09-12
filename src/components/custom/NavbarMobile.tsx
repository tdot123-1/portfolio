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
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavbarMobile = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 440);

  // change placement of sub menu based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 440);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
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
              <DropdownMenuSubContent
                className={` mt-1 ${
                  isWideScreen ? "static" : "absolute top-8 right-0"
                }`}
              >
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
                    <LinkedInLogoIcon className="h-5 w-5" />
                    linkedIn/my-profile
                  </span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default NavbarMobile;
