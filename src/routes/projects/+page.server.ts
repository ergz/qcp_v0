import {getAllProjects } from "$lib/database"

export async function load() {
    const allProjects = await getAllProjects();
    return {
       projects: allProjects.body.data.map((proj) => ({
            name: proj.name,
            client: proj.client_id,
            budget: proj.budget,
            start_date: proj.start_date,
            end_date: proj.end_date,
        }))
    };
}
