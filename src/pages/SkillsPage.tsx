import { skillsData } from "@/data/skillsData";
import { columns } from "@/components/custom/table/columns";
import DataTable from "@/components/custom/table/DataTable";

const SkillsPage = () => {
  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <h1 >Skills page</h1>
        <DataTable columns={columns} data={skillsData} />
      </div>
    </>
  );
};

export default SkillsPage;
