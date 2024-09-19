import { skillsData } from "@/data/skillsData";
import { columns } from "@/components/custom/table/columns";
import DataTable from "@/components/custom/table/DataTable";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { IconBulb, IconDeviceMobile } from "@tabler/icons-react";

const SkillsPage = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 440);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 440);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isWideScreen) {
      toast(
        <div className=" flex flex-col">
          <div className="flex justify-start items-center gap-1.5 text-slate-600">
            <IconBulb />
            <h3 className="font-bold">Tip!</h3>
          </div>
          <div>
            <div className="flex justify-start items-center gap-1.5 text-slate-600">
              <span className="text-xs">
                Rotate your device sideways to display full screen
              </span>
              <IconDeviceMobile className="custom-rotate-device" />
            </div>
          </div>
        </div>
      );
    }
  }, [isWideScreen]);

  return (
    <>
      <div className="bg-slate-100 min-h-screen pb-8">
        <h2 className="text-center pt-6 text-slate-900 font-bold text-xl">
          Skills overview
        </h2>
        <DataTable columns={columns} data={skillsData} />
      </div>
    </>
  );
};

export default SkillsPage;
