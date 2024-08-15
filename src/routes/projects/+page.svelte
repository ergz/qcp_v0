<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let data;
  const clients = data.clients;
  let showModal = false;
  let formElement: HTMLFormElement | null = null;

  const dispatch = createEventDispatcher();

  function openModal(event: Event) {
    event.preventDefault();
    showModal = true;
  }

  function handleConfirm() {
    showModal = false;
    if (formElement) {
      formElement.submit();
    }
  }

  function handleCancel() {
    showModal = false;
  }
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

        {#each data.projects as project}
          <tr>
            <td>{project.name}</td>
            <td>{clients.find((obj) => obj.id === project.client).name}</td>
            <td>{project.budget.toLocaleString("en-US", { style: "currency", currency: "USD" })}</td
            >
            <td>{project.start_date}</td>
            <td>{project.end_date}</td>
            <th>
              <a href="/projects/{project.id}" class="btn btn-outline btn-success btn-sm">Details</a
              >
            </th>
            <th>
              <form method="POST" bind:this={formElement} on:submit|preventDefault={openModal}>
                <input name="project_name_to_delete" type="hidden" value={project.name} />
                <button class="btn btn-outline btn-error btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path
                      d="M10 11l0 6"
                    /><path d="M14 11l0 6" /><path
                      d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"
                    /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg
                  >
                </button>
              </form>
            </th>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <div class="mt-10">
    <a href="/new-project" class="btn btn-outline btn-success">Add project</a>
  </div>
</div>

{#if showModal}
  <div
    class="fixed inset-0 bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center"
  >
    <div class="bg-neutral p-5 rounded-lg shadow-xl">
      <h2 class="text-xl font-bold mb-4">Confirm Deletion</h2>
      <p class="mb-4">Are you sure you want to delete the project?</p>
      <div class="flex justify-end">
        <button on:click={handleCancel} class="btn btn-info m-2">Cancel</button>
        <button on:click={handleConfirm} class="btn btn-error m-2">Confirm</button>
      </div>
    </div>
  </div>
{/if}
