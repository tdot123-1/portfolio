import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const HomePage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <h1 className="text-3xl font-bold underline text-center m-2">
        Hello world!
      </h1>
      <div className="container mx-auto px-4">
        <Button className="bg-slate-500 hover:bg-slate-600 rounded-xl">
          New Button
        </Button>
      </div>
      <div className="bg-card-foreground p-4 m-4 flex justify-center">
        <p className="text-secondary">Secondary text</p>
      </div>
      <div className="container mx-auto p-3 flex justify-center">
        <Popover>
          <PopoverTrigger className="underline p-2 bg-slate-900 rounded-md text-cyan-200 font-bold">
            Open
          </PopoverTrigger>
          <PopoverContent>Content for popover</PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default HomePage;
