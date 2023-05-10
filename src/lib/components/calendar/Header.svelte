<script lang="ts">
	import { format } from '$lib/utils/date'
	import { getMonthPath } from '$lib/utils/path'
	import Container from '$lib/components/utils/Container.svelte'
	import Arrow from '$lib/components/icon/Arrow.svelte'

	export let now = new Date()
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

	$: previousMonthPath = getMonthPath(previousMonth, now)
	$: nextMonthPath = getMonthPath(nextMonth, now)
</script>

<header>
	<Container className="border-b border-gray-300">
		<nav class="flex justify-between">
			<a
				class="flex py-4 px-1 sm:px-4 items-center capitalize rounded sm:text-xl font-bold"
				href={previousMonthPath}><Arrow direction="left" />{format(previousMonth, 'MMMM')}</a
			>
			<h1 class="flex items-center capitalize px-4 text-2xl sm:text-4xl font-bold">
				<span class="inline sm:hidden">{format(currentMonth, 'MMM yyyy').replace('.', '')}</span>
				<span class="hidden sm:inline">{format(currentMonth, 'MMMM yyyy')}</span>
			</h1>
			<a
				class="flex py-4 px-1 sm:px-4 items-center capitalize rounded sm:text-xl font-bold"
				href={nextMonthPath}>{format(nextMonth, 'MMMM')}<Arrow direction="right" /></a
			>
		</nav>
	</Container>
</header>
