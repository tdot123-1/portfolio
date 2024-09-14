import { Button } from "@/components/ui/button";
import { ArrowBigRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import TypingEffect from "@/components/custom/TypingEffect";
import SlideInEffect from "@/components/custom/SlideInEffect";
import SlideInColsEffect from "@/components/custom/SlideInColsEffect";
import SpinGrowEffect from "@/components/custom/SpinGrowEffect";

import GlobeScene from "@/components/model/GlobeScene";

const testImages = [
  <img className="md:aspect-video " src="https://placehold.co/600x400" />,
  <img className="md:aspect-video " src="https://placehold.co/600x400" />,
  <img className="md:aspect-video " src="https://placehold.co/600x400" />,
];

const HomePage = () => {
  return (
    <>
      <section className="container h-screen bg-slate-200 flex justify-center items-center flex-col">
        <h1 className=" font-extrabold underline text-4xl text-slate-900">
          Hello World!
        </h1>
        
        <GlobeScene />
      </section>
      <section className="container h-screen bg-slate-500 flex justify-center items-center px-2">
        <article className="container md:max-w-2xl mx-2 border-2 border-slate-300 text-center p-3 rounded-md">
          <h2 className="py-1 underline font-semibold text-slate-900 text-2xl">
            Introduce webpage
          </h2>
          <TypingEffect text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam itaque nam magni nemo, ad hic quam officiis. Perspiciatis molestiae consectetur autem hic unde distinctio cum tempora voluptatum maxime impedit." />
        </article>
      </section>
      <section className="container h-screen bg-slate-200 px-2">
        <h2 className="text-center py-4 underline font-semibold text-slate-900 text-2xl">
          Get To Know Me
        </h2>

        <SlideInEffect content={testImages} />

        <article className="container mt-5 md:max-w-2xl mx-auto">
          <p className="text-slate-700 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus reiciendis corrupti cumque sed est mollitia
            molestias, fugit quia vitae perferendis totam veritatis fugiat
            impedit nisi, quam porro pariatur, saepe quasi! Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Qui ad reiciendis error
            itaque, unde, illo impedit quam cumque doloribus eaque dolore
            necessitatibus vero. Labore numquam aliquam illum iusto adipisci
            accusantium.
          </p>
        </article>
        <div className="flex justify-center mt-8">
          <Link to="/about">
            <Button
              className="bg-slate-700 text-slate-200 hover:bg-slate-900"
              variant="default"
            >
              Find out more <ArrowBigRightIcon />
            </Button>
          </Link>
        </div>
      </section>
      <section className="container h-screen bg-slate-500 px-2">
        <SlideInColsEffect />
      </section>
      <section className="container h-screen bg-slate-200">
        <h2 className="text-center py-4 underline font-semibold text-slate-900 text-2xl">
          My Skills
        </h2>
        <SpinGrowEffect />
        <article className="container my-12 md:max-w-2xl mx-auto">
          <p className="text-slate-700 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quibusdam autem nisi! Laborum libero ad ratione recusandae fugiat
            tenetur quo, quae magni sunt impedit nesciunt iure. Maxime ea ipsum
            iste.
          </p>
        </article>
        <div className="flex justify-center mt-8">
          <Link to="/skills">
            <Button
              className="bg-slate-700 text-slate-200 hover:bg-slate-900"
              variant="default"
            >
              Find out more <ArrowBigRightIcon />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
