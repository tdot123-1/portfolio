import { skillsData } from "@/data/skillsData";
import { columns } from "@/components/custom/table/columns";
import DataTable from "@/components/custom/table/DataTable";

const SkillsPage = () => {
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
