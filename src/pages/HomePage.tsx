import { Button } from "@/components/ui/button";
import { ArrowBigRightIcon } from "lucide-react";

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
          <p className="text-slate-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            obcaecati laboriosam optio unde maxime! Dicta inventore eos
            dignissimos a deserunt hic delectus optio facere nostrum odio, earum
            commodi assumenda dolorum. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Tenetur quas consectetur non officiis similique
            recusandae nemo doloribus nihil, hic, natus ipsa sapiente voluptatum
            iusto corrupti. Eius itaque quidem optio earum!
          </p>
        </article>
      </section>
      <section className="container h-screen bg-slate-200">
        <h2 className="text-center">Get to know me</h2>
        <div className="columns-3">
          <img src="https://placehold.co/600x400" />
          <img src="https://placehold.co/600x400" />
          <img src="https://placehold.co/600x400" />
        </div>
        <article className="container md:max-w-2xl mx-auto">
          <p>
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
          <Button variant="default">
            Find out more <ArrowBigRightIcon />{" "}
          </Button>
        </div>
      </section>
      <section className="container h-screen bg-slate-500">
        <h2>Section 4</h2>
      </section>
      <section className="container h-screen bg-slate-200">
        <h2>Section 5</h2>
      </section>
    </>
  );
};

export default HomePage;
