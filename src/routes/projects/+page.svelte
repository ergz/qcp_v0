<script lang="ts">
	import { projects } from '$lib/data';
</script>

<div class="w-3/5 mx-auto text-center px-4">
	<h1 class="text-3xl font-bold mb-4">Projects</h1>

	<div class="overflow-x-auto mt-10">
		<table class="table table-zebra">
			<thead>
				<tr>
					<!-- <th> -->
					<!-- 	<label> -->
					<!-- 		<input type="checkbox" class="checkbox" /> -->
					<!-- 	</label> -->
					<!-- </th> -->
					<th>Name</th>
					<th>Client</th>
					<th>Budget</th>
					<th>Start Date</th>
					<th>End Date</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->

				{#each projects as project}
					<tr>
						<!-- <th> -->
						<!-- 	<label> -->
						<!-- 		<input type="checkbox" class="checkbox" /> -->
						<!-- 	</label> -->
						<!-- </th> -->
						<td>{project.name}</td>
						<td>{project.client}</td>
						<td>{project.budget}</td>
						<td>{project.start_date}</td>
						<td>{project.end_date}</td>
						<th>
							<a class="btn btn-outline btn-success btn-xs">Details</a>
						</th>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="mt-10">
		<a href="new-project" class="btn btn-outline btn-success">Add project</a>
	</div>
</div>
