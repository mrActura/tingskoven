<script>
	let { data } = $props();
</script>
<h1>
	users list
</h1>

<ul>
	{#each data.users as { uuid, name, email }}
		<li>
			<a href="/admin/users/{uuid}">{name}, {email}</a>
		</li>
	{/each}
</ul>