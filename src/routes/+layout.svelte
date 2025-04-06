<script>
  import "../app.css";
  const { children } = $props();
  console.log("ROOT layout rendered");

</script>

<div id="app" class="bg-gray-100">
  <main class="flex flex-col justify-between min-h-screen">
    <div class="flex items-center justify-between  px-6 md:px-16 py-6">
      <h1 class="hidden md:block text-3xl font-extrabold uppercase">
        Tingskoven frivillig portal
      </h1>
      <h1 class="md:hidden text-xl font-bold uppercase">
        Tingskoven frivillig portal
      </h1>
      <a
        class="inline-block rounded-lg py-3 text-lg font-semibold leading-6 pr-6 pl-8 border border-slate-600 text-slate-600 hover:bg-slate-200"
        href="https://sst-story.sveltehub.dev"
        target="_blank"
        rel="noreferrer"
      >
        <div class="flex items-center gap-2">
          UI Doc<svg
            class="h-5 w-5 stroke-2 stroke-slate-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path></svg
          >
        </div></a
      >
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {@render children()}
    </div>

    <footer class="bg-svelte-100 py-4 text-center">
      <div class="text-sm leading-6 flex items-center justify-center gap-1">
        Made with
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path fill="#E53E3E" fill-rule="evenodd" d="M3.172 5.172a4 4..." clip-rule="evenodd"></path>
        </svg>
      </div>
    </footer>
  </main>
</div>
