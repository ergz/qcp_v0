<script lan="ts">
	import { createEventDispatcher } from 'svelte';

	export let isOpen = false;
	export let message = 'Are you sure you want to delete this project?';

	const dispatch = createEventDispatcher();

	function confirm() {
		dispatch('confirm');
		isOpen = false;
	}

	function cancel() {
		dispatch('cancel');
		isOpen = false;
	}
</script>

{#if isOpen}
	{#if isOpen}
		<div
			class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
		>
			<div class="bg-white p-5 rounded-lg shadow-xl">
				<h2 class="text-xl font-bold mb-4">Confirm Action</h2>
				<p class="mb-4">{message}</p>
				<div class="flex justify-end">
					<button on:click={cancel} class="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded"
						>Cancel</button
					>
					<button on:click={confirm} class="px-4 py-2 bg-red-500 text-white rounded">Confirm</button
					>
				</div>
			</div>
		</div>
	{/if}
{/if}
