<script lang="ts">
	import { format } from '$lib/utils/date'
	import { getMonthPath } from '$lib/utils/path'
	import Container from '$lib/components/layout/Container.svelte'
	import Arrow from '$lib/components/icon/Arrow.svelte'

	export let currentMonth: Date = new Date()

	let previousMonth: Date = new Date(currentMonth.getTime())
	let nextMonth: Date = new Date(currentMonth.getTime())

	$: {
		let date = new Date(currentMonth.getTime())
		date.setMonth(date.getMonth() - 1)
		previousMonth = date
	}

	$: {
		let date = new Date(currentMonth.getTime())
		date.setMonth(date.getMonth() + 1)
		nextMonth = date
	}

	$: previousMonthPath = getMonthPath(previousMonth)
	$: currentMonthPath = getMonthPath(currentMonth)
	$: nextMonthPath = getMonthPath(nextMonth)
</script>

<header class="fixed top-0 left-0 w-full z-10">
	<Container className="border-t sm:border-t-0 border-gray-300 shadow">
		<nav class="flex justify-between">
			<a
				class="flex py-4 px-1 sm:px-4 items-center capitalize rounded sm:text-xl font-bold"
				href={previousMonthPath}><Arrow direction="left" />{format(previousMonthPath, 'MMMM')}</a
			>
			<h1 class="flex items-center capitalize px-4 text-2xl sm:text-3xl font-bold">
				<span class="inline sm:hidden">{format(currentMonthPath, 'MMM yyyy').replace('.', '')}</span
				>
				<span class="hidden sm:inline">{format(currentMonthPath, 'MMMM yyyy')}</span>
			</h1>
			<a
				class="flex py-4 px-1 sm:px-4 items-center capitalize rounded sm:text-xl font-bold"
				href={nextMonthPath}>{format(nextMonthPath, 'MMMM')}<Arrow direction="right" /></a
			>
		</nav>
	</Container>
</header>
