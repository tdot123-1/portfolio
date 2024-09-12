import React from "react";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

interface RouteObject {
  path: string;
  element: React.ReactNode;
}

const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/skills", element: <SkillsPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default routes;
