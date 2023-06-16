<script>
	export let content;
</script>

{#each content as { date, refs }}
	<p>{date}</p>
	<p>{refs}</p>
{/each}
