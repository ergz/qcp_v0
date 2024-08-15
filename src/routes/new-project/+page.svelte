<script lang="ts">
  export let data;
  const clients = data.clients.client;
</script>

<div class="w-3/5 mx-auto text-center px-4">
  <h1 class="text-3xl font-bold mb-4">New Project</h1>
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
      {#each clients as client}
        <option value={client.id}>{client.name}</option>
      {/each}
    </select>
    <input
      name="budget"
      type="text"
      placeholder="Budget total"
      class="input input-bordered w-full max-w-xs"
      autocomplete="off"
      required
    />
    <textarea
      name="description"
      class="textarea textarea-bordered w-full max-w-xs"
      placeholder="Project Description"
      required
    ></textarea>

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

    <select class="select select-bordered w-full max-w-sm max-h-md" name="staff" multiple size="5">
      <option value="1">Emanuel</option>
      <option value="2">John</option>
      <option value="3">Jane</option>
      <option value="4">Steve</option>
      <option value="5">Erica</option>
    </select>

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
