import { Icon } from "@tabler/icons-react";

export interface Tech {
  name: string;
  icon: Icon;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: Tech[];
  deployed: boolean;
  link: string;
}
