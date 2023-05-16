<script lang="ts">
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { getMonthPath } from '$lib/utils/path'
	import fetchMonth, { initialState } from '$lib/utils/fetchMonth'
	import Placeholder from '$lib/components/utils/Placeholder.svelte'
	import Container from '$lib/components/utils/Container.svelte'
	import Error from '$lib/components/utils/Error.svelte'
	import mounted from '$lib/utils/mounted'
	import callOnVisibilityChange from '$lib/utils/callOnVisibilityChange'
	import { getPreviousMonth, getCurrentMonth, getNextMonth } from '$lib/utils/date'
	import { online } from '$lib/stores'
	import type { IMonth } from '$lib/utils/fetchMonth'
	import Header from './Header.svelte'
	import Table from './Table.svelte'
	import Weeks from './Weeks.svelte'
	import Offline from './Offline.svelte'
	import MobileNav from './MobileNav.svelte'
	import ChangeMonthOnSwipe from './ChangeMonthOnSwipe.svelte'

	$: now = new Date()

	$: searchParams = browser && $page.url.searchParams

	$: currentMonth = getCurrentMonth(searchParams, now)

	$: previousMonth = getPreviousMonth(currentMonth)
	$: previousMonthPath = getMonthPath(previousMonth, now)

	$: nextMonth = getNextMonth(currentMonth)
	$: nextMonthPath = getMonthPath(nextMonth, now)

	let month: IMonth = { ...initialState }

	$: {
		if (mounted) {
			month.loading = true

			fetchMonth(currentMonth).then((data) => {
				month = data
			})
		}
	}

	function onVisibilityChange() {
		const state = document.visibilityState

		if (state === 'visible') {
			month = month
		}
	}

	callOnVisibilityChange(onVisibilityChange)
</script>

<svelte:head>
	<title>Kalender med veckonummer</title>
	<meta name="description" content="Kalender med veckonummer och röda dagar." />
</svelte:head>

<Header {previousMonth} {previousMonthPath} {currentMonth} {nextMonth} {nextMonthPath} />
<ChangeMonthOnSwipe {previousMonthPath} {nextMonthPath} className="bg-white">
	<Container>
		<main>
			{#if month.loading}
				<Placeholder className="w-full h-[16rem] sm:h-[39rem]" />
				<Placeholder className="w-full h-[26rem] sm:h-[30rem] mt-8" />
				<Placeholder className="w-full h-[26rem] sm:h-[30rem] mt-8" />
				<Placeholder className="w-full h-[26rem] sm:h-[30rem] mt-8" />
				<Placeholder className="w-full h-[26rem] sm:h-[30rem] mt-8" />
			{:else if !$online && month.error}
				<Offline />
			{:else if month.error}
				<Error className="py-8" />
			{:else if month.weeks}
				<Table weeks={month.weeks} {currentMonth} {now} />
				<Weeks weeks={month.weeks} {currentMonth} {now} />
			{/if}
			<MobileNav {previousMonth} {previousMonthPath} {nextMonth} {nextMonthPath} />
		</main>
	</Container>
</ChangeMonthOnSwipe>
