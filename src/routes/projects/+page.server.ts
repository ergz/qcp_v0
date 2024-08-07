import { getAllProjects, deleteProject } from "$lib/database"
import { error, type Actions } from "@sveltejs/kit";

export async function load() {
    const allProjects = await getAllProjects();
    return {
       projects: allProjects.body.data.map((proj) => ({
            id: proj.id,
            name: proj.name,
            client: proj.client_id,
            budget: proj.budget,
            start_date: proj.start_date,
            end_date: proj.end_date,
        }))
    };
}


export const actions: Actions = {
   default: async ({request}) => {
      const data = await request.formData();
      console.log(data);
      const project_name = data.get("project_name_to_delete");

      if (project_name !== null) {
         await deleteProject(project_name.toString());
      }

   }
}
