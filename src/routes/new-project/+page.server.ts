import { addProject, getAllClient, getAllStaff, type Project } from "$lib/database";

import { type Actions } from "@sveltejs/kit";

export async function load() {
  const clients = await getAllClient();

  return {
    clients: clients
  };
}

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("project_name");
    const client_id = data.get("client_name");
    const budget = data.get("budget");
    const start_date = data.get("start_date");
    const end_date = data.get("end_date");
    const description = data.get("description");
    const staff = data.getAll("staff").map((s) => parseInt(s.toString()));

    const all_staff = await getAllStaff();
    const project_staff = all_staff.staff.filter((obj) => staff.includes(obj.id));

    if (!name || !client_id || !budget || !start_date || !end_date || !description || !staff) {
      console.log("validation failed");
      throw "something";
    }

    const project_data: Project = {
      name: name.toString(),
      client_id: parseInt(client_id.toString()),
      budget: parseInt(budget.toString()),
      start_date: start_date.toString(),
      end_date: end_date.toString(),
      description: description.toString(),
      staff: project_staff
    };

    try {
      const msg = await addProject(project_data);
      console.log(msg);
    } catch (error) {
      console.log("error trying to add project to database");
      console.log(error);
    }
  }
};
