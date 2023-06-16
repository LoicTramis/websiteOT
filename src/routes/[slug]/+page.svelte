<script>
	export let data;
	import Publications from '../../components/Publications.svelte';
	import Activities from '../../components/Activities.svelte';
	import Results from '../../components/Results.svelte';

	const component = {
		publications: Publications,
		activities: Activities,
		results: Results
	};
</script>

<svelte:head>
	<title>OT - {data.page.title}</title>
</svelte:head>

<!-- Content of pages here -->
<article class="flex flex-col items-center m-5">
	<h2 class="flex text-4xl my-5">{data.page.title}</h2>
	<!-- Pages -->
	<svelte:component this={component[data.page.slug]} content={data.page.content} />
</article>
