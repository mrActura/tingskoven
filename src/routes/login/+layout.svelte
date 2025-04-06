<script>
  import "../../app.css";
  const { children } = $props();
  
  console.log("Login layout rendered");

</script>

<div id="app" class="bg-gray-100">
  <main class="flex flex-col justify-between min-h-screen">
    <div class="px-6 py-6 md:px-16">
      <h1 class="text-xl font-bold md:text-3xl md:font-extrabold uppercase">
        Tingskoven frivillig portal
      </h1>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {#if children}
        {@render children()}
      {/if}
    </div>

    <footer class="bg-svelte-100 py-4 text-center">
      <div class="text-sm leading-6 flex items-center justify-center gap-1">
        Made with
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            fill="#E53E3E"
            fill-rule="evenodd"
            d="M3.172 5.172a4 4..."
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </footer>
  </main>
</div>
