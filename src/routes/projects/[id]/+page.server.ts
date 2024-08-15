import { getAllProjects, type Project } from "$lib/database";
import type { PageServerLoad } from "./$types";

export async function load({ params }) {
  const all_projects = await getAllProjects();
  const project_data = all_projects.body.data;

  const selected_project = project_data.find((p) => p.id === parseInt(params.id));

  return {
    project: selected_project
  };
}
