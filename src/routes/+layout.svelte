<script>
	import '$lib/css/app.css';
	import '$lib/css/global.css';
	import einstein from '$lib/assets/einstein.jpg';
	export let data;
</script>

<main class="flex flex-row">
	<aside class="basis-1/6">
		<h1>Olivier Tramis</h1>
		<p>Ingénieur au XXXX</p>
		<img src={einstein} alt="Alber Einstein" class="" />
		<p><a href="mailto:olivier.tramis@gmail.com">olivier.tramis@gmail.com</a></p>
		<p><a href="+33701020304">+33 07 01 02 03 04</a></p>
	</aside>

	<section class="basis-5/6">
		<nav class="mx-60">
			<ul class="flex justify-around h-14">
				{#each data.pages as { slug, title }}
					<li class="flex grow basis-1 gap-1">
						<a
							class="flex grow justify-center items-center
									border border-black
									hover:border-current hover:bg-[#502645]"
							href={slug}
						>
							{title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
		<slot />
	</section>
</main>
