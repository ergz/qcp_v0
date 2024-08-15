import { getAllStaff, type Staff } from '$lib/database';

export async function load() {
	const staff_results = await getAllStaff();
	return {
		staff: staff_results
	};
}
