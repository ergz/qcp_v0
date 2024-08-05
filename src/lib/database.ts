import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

let db: Database | null = null;

export async function getDB() {
	if (!db) {
		db = await open({
			filename: "qcp.sqlite3",
			driver: sqlite3.Database
		});
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
		console.log("trying to get the data");
		const query = "SELECT * FROM projects;";
		const results = await db.all(query);
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
