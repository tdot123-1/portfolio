import AboutContent from "@/components/custom/AboutContent";

const AboutPage = () => {
  return (
    <>
      <div className="bg-slate-100 flex flex-col flex-grow min-h-screen justify-center">
        <h2 className="text-center text-slate-900 font-bold text-xl">
          About Me
        </h2>
        <AboutContent />
      </div>
    </>
  );
};

export default AboutPage;
