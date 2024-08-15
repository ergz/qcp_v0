<script>
  import "../app.css";
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/">qcpV0</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/projects">Projects</a></li>
      <li><a href="/staff">Staff</a></li>
      <li><a href="/settings">Settings</a></li>
      <li><a href="/about">About</a></li>
      <!-- Use this if need menu with submenu options -->
      <!-- <li> -->
      <!-- 	<details> -->
      <!-- 		<summary>Parent</summary> -->
      <!-- 		<ul class="bg-base-100 rounded-t-none p-2"> -->
      <!-- 			<li><a>Link 1</a></li> -->
      <!-- 			<li><a>Link 2</a></li> -->
      <!-- 		</ul> -->
      <!-- 	</details> -->
      <!-- </li> -->
    </ul>
  </div>
</div>

<main>
  <slot />
</main>
