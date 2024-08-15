import sqlite3 from "sqlite3";
import { open } from "sqlite";
import type { Database } from "sqlite";
import { projects } from "./data";

export interface Project {
  id: number;
  name: string;
  client_id: number;
  budget: number;
  start_date: string;
  end_date: string;
  description: string;
  staff: Staff[];
}

export interface Staff {
  id: number;
  name: string;
  position: string;
  rate: number;
}

export interface Client {
  id: number;
  name: string;
}

let db: Database | null = null;

/* database related functions */
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

/* data projects table */
export async function getAllProjects() {
  const db: Database = await getDB();

  try {
    const query = "SELECT * FROM projects;";
    const results: Project[] = await db.all(query);
    return {
      status: 200,
      body: { data: results }
    };
  } catch (error) {
    return {
      status: 500,
      body: { error: "failed to to fetch the projects" }
    };
  }
}

export async function addProject(project: Project) {
  const db: Database = await getDB();

  // insert into the lookup table first

  let inserted_id: number = 0;
  const query = `INSERT INTO projects (name, client_id, budget, start_date, end_date, description) VALUES (?, ?, ?, ?, ?, ?)`;
  const params = [
    project.name,
    project.client_id,
    project.budget,
    project.start_date,
    project.end_date,
    project.description
  ];

  try {
    await db.run(query, params);
  } catch (error) {
    console.error("Error inserting project");
  }

  // TODO: avoid this extra db call by just get the id on insert
  const inserted_project = await db.all(`SELECT id from projects where name = ?`, [project.name]);
  const latest_inserted_id = inserted_project[0].id;

  // insert into the lookup after project is created
  const staff_lookup_insert = `INSERT INTO staff_project_lookup (project_id, staff_id) VALUES (?, ?)`;
  const project_staff: Staff[] = project.staff;
  for (let s of project_staff) {
    await db.run(staff_lookup_insert, [latest_inserted_id, s.id]);
  }

  return { message: "operation complete" };
}

export async function deleteProject(project_name: string) {
  const db: Database = await getDB();
  const query = `DELETE FROM projects where name = ?;`;
  const params = [project_name];

  try {
    await db.run(query, params);
  } catch (error) {
    console.log("error trying to delete the data");
  }
}

/* database staff tables */
export async function getAllStaff() {
  const db: Database | null = await getDB();
  const query = "SELECT * FROM users";

  const results: Staff[] = await db.all(query);

  return {
    staff: results
  };
}

export async function getAllClient() {
  const db: Database | null = await getDB();
  const q = "SELECT * FROM clients;";

  const results: Client[] = await db.all(q);

  return {
    client: results
  };
}

export async function getClientDetails() {}
