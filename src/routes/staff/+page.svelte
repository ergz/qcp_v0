<script lang="ts">
  export let data;

  const staff = data.staff.staff;
</script>

<div class="w-3/5 mx-auto text-center px-4">
  <h1 class="text-3xl font-bold mb-4">Staff</h1>

  <div class="overflow-x-auto mt-10">
    <table class="table table-zebra">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->

        {#each staff as s}
          <tr>
            <td>{s.name}</td>
            <td>{s.position}</td>
            <td>{s.rate.toLocaleString("en-US", { style: "currency", currency: "USD" })} </td>
            <th>
              <a href="" class="btn btn-outline btn-success btn-sm">Details</a>
            </th>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <div class="mt-10">
    <a href="/new-staff" class="btn btn-outline btn-success">Add staff</a>
  </div>
</div>
