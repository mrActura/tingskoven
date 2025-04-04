<script>
	let { data } = $props();
</script>

<h1>
	{data.user.name}
</h1>
<ol>
	{#each data.visits as visit}
		<li>
			Besøg d. {visit.date} kl. {visit.time_start} - {visit.time_end}
		</li>
	{/each}
</ol>