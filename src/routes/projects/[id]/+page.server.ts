import { getAllProjects, type Project } from "$lib/database";

export async function load({ params }) {
   const all_projects = await getAllProjects();
   const project_data = all_projects.body.data;

   const selected_project = project_data.find(p => p.id === parseInt(params.id));
   console.log("the selected project is:", selected_project);


   return {
      project: selected_project
   }
}

