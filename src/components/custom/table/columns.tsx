import { Icon } from "@tabler/icons-react";
import { ColumnDef } from "@tanstack/react-table";

export type Skill = {
  id: number;
  icon: Icon;
  name: string;
  description: string;
  experience: string;
};

export const columns: ColumnDef<Skill>[] = [
  {
    accessorKey: "icon",
    header: "Icon",
    cell: ({ getValue }) => {
      const IconComp = getValue() as Icon;
      return <IconComp />;
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "experience",
    header: "Experience",
  },
];
