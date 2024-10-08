import { getAllProjects, deleteProject, getAllClient } from "$lib/database";
import { error, type Actions } from "@sveltejs/kit";

export async function load() {
  const allProjects = await getAllProjects();
  const allClients = await getAllClient();
  return {
    clients: allClients.client.map((c) => ({
      id: c.id,
      name: c.name
    })),
    projects: allProjects.body.data.map((proj) => ({
      id: proj.id,
      name: proj.name,
      client: proj.client_id,
      budget: proj.budget,
      start_date: proj.start_date,
      end_date: proj.end_date
    }))
  };
}

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const project_name = data.get("project_name_to_delete");

    if (project_name !== null) {
      await deleteProject(project_name.toString());
    }
  }
};
