export let projects = [
		{
			name: 'Website Redesign',
			client: 'TechCorp Inc.',
			budget: "10000",
			start_date: '2024-09-01',
			end_date: '2024-12-15'
		},
		{
			name: 'Mobile App Development',
			client: 'HealthTrack',
			budget: '760000',
			start_date: '2024-10-15',
			end_date: '2025-03-31'
		},
		{
			name: 'Database Migration',
			client: 'Finance Solutions Ltd.',
			budget: "123000",
			start_date: '2025-01-10',
			end_date: '2025-04-30'
		},
		{
			name: 'E-commerce Platform',
			client: 'FashionForward',
			budget: '100000',
			start_date: '2024-11-01',
			end_date: '2025-05-31'
		}
	];

export function addProject(project_name: string, client: string, budget: string, start_date: string, end_date: string) {
	const new_project = {name: project_name, client: client, budget: budget, start_date: start_date, end_date: end_date};

	projects = [...projects, new_project];

}


