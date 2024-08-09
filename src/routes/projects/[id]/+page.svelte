<script lang="ts">
	export let data;
</script>

<div class="w-3/5 mx-auto text-center px-4">
	<div class="relative mb-4">
		<a
			href="/projects"
			class="btn btn-success btn-md absolute left-0 top-0 p-2"
			aria-label="Go back"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6 fill-current">
				<path
					d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
				/>
			</svg>
		</a>
		<h1 class="text-3xl text-center">{data.project.name}</h1>
	</div>
	<p class="w-2/5 mx-auto text-center m-10">
		Here is a description of this project, this section needs to be added to all of the projects, by
		adding this as field to the database and required form element in the add new project page
	</p>
</div>
