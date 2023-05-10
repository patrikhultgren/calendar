<script lang="ts">
	import ScrollToTopButton from './ScrollToTopButton.svelte'
	import fetchMonth, { initialState } from '$lib/utils/fetchMonth'
	import Placeholder from '$lib/components/utils/Placeholder.svelte'
	import Container from '$lib/components/utils/Container.svelte'
	import Error from '$lib/components/utils/Error.svelte'
	import mounted from '$lib/utils/mounted'
	import type { IMonth } from '$lib/utils/fetchMonth'
	import Header from './Header.svelte'
	import Table from './Table.svelte'
	import Weeks from './Weeks.svelte'

	let now = new Date()

	export let currentMonth = new Date(now.getTime())

	let month: IMonth = { ...initialState }

	$: {
		if (mounted) {
			month.loading = true

			fetchMonth(currentMonth).then((data) => {
				month = data
			})
		}
	}
</script>

<svelte:head>
	<title>Kalender med veckonummer</title>
	<meta name="description" content="Kalender med veckonummer och röda dagar." />
</svelte:head>

<Header {currentMonth} {now} />
<Container className="pb-8">
	<main>
		{#if month.loading}
			<Placeholder className="w-full h-[16rem] sm:h-[39rem]" />
			<Placeholder className="w-full h-[26rem] sm:h-[30rem] mt-8" />
			<Placeholder className="w-full h-[26rem] sm:h-[30rem] mt-8" />
			<Placeholder className="w-full h-[26rem] sm:h-[30rem] mt-8" />
			<Placeholder className="w-full h-[26rem] sm:h-[30rem] mt-8" />
		{/if}
		{#if month.error}
			<Error className="pt-8" />
		{/if}
		{#if month.weeks}
			<Table weeks={month.weeks} {currentMonth} {now} />
		{/if}
		{#if month.weeks}
			<Weeks weeks={month.weeks} {currentMonth} {now} />
		{/if}
		<ScrollToTopButton />
	</main>
</Container>
