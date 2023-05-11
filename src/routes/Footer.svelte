<script lang="ts">
	import Container from '$lib/components/utils/Container.svelte'

	let footerInfo: any
	let show = false

	function onToggle() {
		show = !show
	}

	$: if (show && footerInfo) {
		footerInfo.scrollIntoView({ behavior: 'smooth' })
	}
</script>

<footer class="bg-gray-100 border-t border-gray-300">
	<Container className="text-sm text-slate-900 pt-8 pb-20 sm:pb-8">
		<button
			on:click={onToggle}
			class="mx-auto px-4 py-3 rounded bg-black hover:bg-gray-800 border flex text-white font-bold"
		>
			<span class="mr-1">Om sajten</span>
		</button>
		{#if show}
			<div
				bind:this={footerInfo}
				id="footer-info"
				class="px-4 [&>p]:mt-2 first:[&>p]:mt-0 mt-8 mx-auto max-w-[600px] text-center"
			>
				<h2 class="text-2xl font-bold">Se helgdagar och veckonummer enkelt</h2>
				<p>Lägg gärna till sajten som en ikon på din hemskärm i mobilen.</p>
				<p>
					Sidan är byggd av {' '}
					<a class="underline" href="mailto:patrik.hult@gmail.com"> Patrik Hultgren</a>.
				</p>
				<p class="text-xs mt-6">
					Innehållet tillhandahålls av <a class="underline" href="https://sholiday.faboul.se/">
						Faboul</a
					>.
				</p>
				<p class="text-xs">Inga kakor används på sajten.</p>
				<p class="text-xs">Innehållet kan vara felaktigt. Inget ansvar tas kring innehållet.</p>
			</div>
		{/if}
	</Container>
</footer>
