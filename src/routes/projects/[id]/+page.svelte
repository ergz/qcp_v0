<script lang="ts">
  export let data;
</script>

<div class="w-3/5 mx-auto text-center px-4">
  <div class="relative mb-4">
    <h1 class="text-3xl text-center">{data.project.name}</h1>
  </div>
  <p class="w-2/5 mx-auto text-center m-10">
    {data.project.description}
  </p>
</div>
