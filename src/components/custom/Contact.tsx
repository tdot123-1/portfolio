import { MailIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="default"
            className="bg-slate-700 text-slate-300 hover:bg-slate-900"
          >
            Contact
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-fit">
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <div className="bg-gray-200 p-4 rounded-sm">
              <span className="flex gap-1 justify-center items-center">
                <MailIcon className="h-5 w-5" /> emailadress@test.com
              </span>
            </div>
            <div className="bg-gray-200 p-4 rounded-sm">
              <span className="flex gap-1 justify-center items-center">
                <GitHubLogoIcon className="h-5 w-5" />
                github/my-account
              </span>
            </div>
            <div className="bg-gray-200 p-4 rounded-sm col-span-2 items-center">
              <span className="flex gap-1 justify-center">
                <LinkedInLogoIcon className="h-5 w-5" /> linkedIn/my-profile
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Contact;
