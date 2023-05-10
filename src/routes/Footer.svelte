<script lang="ts">
	import Arrow from '$lib/components/icon/Arrow.svelte'
	import Container from '$lib/components/utils/Container.svelte'

	let footerInfo
	let show = false

	function onToggle() {
		show = !show
	}

	$: if (show && footerInfo) {
		footerInfo.scrollIntoView({ behavior: 'smooth' })
	}
</script>

<footer>
	<Container className="text-sm text-slate-900 pt-8 pb-20 sm:pb-8">
		<button
			on:click={onToggle}
			class="mx-auto px-4 py-3 rounded bg-gray-100 hover:bg-gray-200 border flex"
		>
			<span class="mr-1">Om sajten</span>
		</button>
		{#if show}
			<div
				bind:this={footerInfo}
				id="footer-info"
				class="px-4 [&>p]:mt-4 first:[&>p]:mt-0 mt-8 mx-auto max-w-[600px]"
			>
				<h2 class="text-lg">
					Denna sajt är till för att enkelt kunna se helgdagar och veckonummer.
				</h2>
				<p>
					Kalenderdatan tillhandahålls av <a class="underline" href="https://sholiday.faboul.se/">
						Faboul</a
					>.
				</p>
				<p>Inga kakor används på sajten.</p>
				<p>Innehållet kan vara felaktigt. Inget ansvar tas kring innehållet.</p>
				<p>
					Sidan är byggd av mig{' '}
					<a class="underline" href="mailto:patrik.hult@gmail.com"> Patrik Hultgren</a>.
				</p>
			</div>
		{/if}
	</Container>
</footer>
