import sqlite3 from "sqlite3";
import { open } from "sqlite";
import type {Database} from "sqlite";

export interface Project {
	name: string;
	client_id: number;
	budget: number;
	start_date: string,
	end_date: string
};

let db: Database | null = null;

export async function getDB() {
	if (!db) {
		try {
			db = await open({
				filename: "qcp.sqlite3",
				driver: sqlite3.Database
			});
		} catch (error) {
			throw error;
		}
	}

	return db;
}


export async function closeDB() {
	if (db) {
		await db.close();
		db = null;
	}
}


export async function getAllProjects() {
	const db: Database = await getDB();

	try {
		const query = "SELECT * FROM projects;";
		const results: Project[] = await db.all(query);
		return {
			status: 200, 
			body: {data: results}
		}
	} catch (error) {
		return {
			status: 500,
			body: {error: "failed to to fetch the projects"}
		}
		
	}


}

export async function addProject(project: Project) {
	console.log("in the add projects function");
	const db: Database = await getDB();

	const query = `INSERT INTO projects (name, budget, start_date, end_date) VALUES (?, ?, ?, ?)`;
	const params = [project.name, project.budget, project.start_date, project.end_date];

	try {
		await db.run(query, params);
	} catch (error) {
		console.error("Error inserting project")
	}

}
