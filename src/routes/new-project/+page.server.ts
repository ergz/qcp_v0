import {  addProject, type Project } from "$lib/database";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({request}) => {
        console.log("performing the default action");
        const data = await request.formData();
        const name = data.get("project_name");
        const client_id = 1;
        const budget = data.get("budget");
        const start_date = data.get("start_date");
        const end_date = data.get("end_date");

        if (!name || !client_id || !budget || !start_date || !end_date) {
            console.log("validation failed");
            throw "something";
        }

        const project_data: Project = {
            name: name.toString(),
            client_id: parseInt(client_id.toString()),
            budget: parseInt(budget.toString()),
            start_date: start_date.toString(),
            end_date: end_date.toString()

        }

        try {
            addProject(project_data);
        } catch (error) {
            console.log("error trying to add project to database")
            console.log(error);
        }
    } 
}
