<script lang="ts">
	export let data;
</script>

<div class="w-3/5 mx-auto text-center px-4">
	<h1 class="text-3xl font-bold mb-4">New Project</h1>
	<!-- 
  In this page we need to get some data from the user
  1. the name of the project
  2. the client
  3. the budget
  4. the start date
  5. the end date
  -->
	<form method="post" class="mt-10 flex flex-col items-center space-y-4">
		<input
			name="project_name"
			type="text"
			placeholder="Project name"
			class="input input-bordered w-full max-w-xs"
			autocomplete="off"
			required
		/>
		<select class="select select-bordered w-full max-w-xs" required name="client_name">
			<option disabled selected value="">Client</option>
			<option>Big Valley Rancheria</option>
			<option>Ca. Department of Fish and Wildlife</option>
			<option>Department of Water Resources</option>
		</select>
		<input
			name="budget"
			type="text"
			placeholder="Budget total"
			class="input input-bordered w-full max-w-xs"
			autocomplete="off"
			required
		/>
		<input
			name="start_date"
			type="date"
			placeholder="Start date"
			class="input input-bordered w-full max-w-xs"
			required
		/>
		<input
			name="end_date"
			type="date"
			placeholder="End date"
			class="input input-bordered w-full max-w-xs"
			required
		/>

		<div class="inline-flex space-x-4">
			<label class="inline-flex items-center">
				<input type="radio" class="form-radio" name="option" value="option1" />
				<span class="ml-2">Easy all the way</span>
			</label>
			<label class="inline-flex items-center">
				<input type="radio" class="form-radio" name="option" value="option2" />
				<span class="ml-2">Upfront burn</span>
			</label>
			<label class="inline-flex items-center">
				<input type="radio" class="form-radio" name="option" value="option3" />
				<span class="ml-2">Backend burn</span>
			</label>
		</div>

		<div class="m-5">
			<button class="btn btn-outline btn-success">Add</button>
		</div>
	</form>
</div>
