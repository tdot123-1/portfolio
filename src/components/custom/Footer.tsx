import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-700 py-10">
        <div className="flex flex-col items-center gap-3 justify-evenly text-slate-300 md:flex-row">
          <span className="flex gap-2 items-center">
            <IconBrandGithub className="size-7" />
            github.com/my-account
          </span>
          <span className="flex gap-2 items-center">
            <IconMail className="size-7" />
            myemail@email.com
          </span>
          <span className="flex gap-2 items-center">
            <IconBrandLinkedin className="size-7" />
            linkedin.com/my-account
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
