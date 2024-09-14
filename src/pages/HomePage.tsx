import { Button } from "@/components/ui/button";
import { ArrowBigRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  IconBrandDjango,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
} from "@tabler/icons-react";

import TypingEffect from "@/components/custom/TypingEffect";
import SlideInEffect from "@/components/custom/SlideInEffect";

const testImages = [
  <img
    className="md:aspect-video "
    src="https://placehold.co/600x400"
  />,
  <img
    className="md:aspect-video "
    src="https://placehold.co/600x400"
  />,
  <img
    className="md:aspect-video "
    src="https://placehold.co/600x400"
  />,
];

const HomePage = () => {
  return (
    <>
      <section className="container h-screen bg-slate-200 flex justify-center items-center">
        <h1 className=" font-extrabold underline text-4xl text-slate-900">
          Hello World!
        </h1>
      </section>
      <section className="container h-screen bg-slate-500 flex justify-center items-center">
        <article className="container md:max-w-2xl mx-2 border-2 border-slate-300 text-center p-3 rounded-md">
          <h2 className="py-1 underline font-semibold text-slate-900 text-2xl">
            Introduce webpage
          </h2>
          <TypingEffect text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam itaque nam magni nemo, ad hic quam officiis. Perspiciatis molestiae consectetur autem hic unde distinctio cum tempora voluptatum maxime impedit." />
        </article>
      </section>
      <section className="container h-screen bg-slate-200">
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
              Find out more <ArrowBigRightIcon />{" "}
            </Button>
          </Link>
        </div>
      </section>
      <section className="container h-screen bg-slate-500">
        <div className="grid grid-cols-3 grid-rows-[auto,1fr] h-full">
          <h2 className="col-span-3 text-center py-4 underline font-semibold text-slate-900 text-2xl">
            My Projects
          </h2>
          <div className="flex flex-col items-center justify-evenly">
            <img className="w-56" src="https://placehold.co/600x400" />
            <img className="w-56" src="https://placehold.co/600x400" />
            <img className="w-56" src="https://placehold.co/600x400" />
          </div>
          <article className="flex flex-col items-center justify-center">
            <p className="text-slate-300 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio vel veritatis porro eius, quasi recusandae repudiandae
              reiciendis incidunt unde similique, facilis ea obcaecati explicabo
              nam quidem id delectus eligendi iste.
            </p>
          </article>
          <div className="flex flex-col justify-center items-center">
            <Link to="/projects">
              <Button
                className="bg-slate-300 text-slate-700 hover:bg-slate-400"
                variant="default"
              >
                Find out more <ArrowBigRightIcon />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="container h-screen bg-slate-200">
        <h2 className="text-center py-4 underline font-semibold text-slate-900 text-2xl">
          My Skills
        </h2>
        <div className="w-2/5 mx-auto grid grid-cols-3 grid-rows-2">
          <div className="flex justify-center py-3">
            <IconBrandReact className="text-slate-800 size-8" />
          </div>
          <div className="flex justify-center py-3">
            <IconBrandJavascript className="text-slate-800 size-10" />
          </div>
          <div className="flex justify-center py-3">
            <IconBrandPython className="text-slate-800 size-10" />
          </div>
          <div className="flex justify-center py-3">
            <IconBrandHtml5 className="text-slate-800 size-10" />
          </div>
          <div className="flex justify-center py-3">
            <IconBrandDjango className="text-slate-800 size-10" />
          </div>
          <div className="flex justify-center py-3">
            <IconBrandNodejs className="text-slate-800 size-10" />
          </div>
        </div>
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
