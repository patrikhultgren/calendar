<script lang="ts">
	import { format } from '$lib/utils/date'
	import { getMonthPath } from '$lib/utils/path'
	import Container from '$lib/components/Container.svelte'
	import Arrow from '$lib/components/icon/Arrow.svelte'

	export let currentMonth: Date = new Date()

	let previousMonth: Date = new Date()
	let nextMonth: Date = new Date()

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

<header class="justify-between">
	<Container>
		<nav>
			<ul class="flex justify-between">
				<li class="">
					<a
						class="flex py-2 px-4 items-center capitalize bg-slate-50a rounded text-xl font-bold"
						href={previousMonthPath}
						><Arrow direction="left" />{format(previousMonthPath, 'MMMM')}</a
					>
				</li>
				<li
					class="flex items-center bg-slate-100a capitalize px-4 text-3xl font-bold"
					aria-current="page"
				>
					{format(currentMonthPath, 'MMMM yyyy')}
				</li>
				<li>
					<a
						class="flex py-2 px-4 items-center capitalize bg-slate-50a rounded text-xl font-bold"
						href={nextMonthPath}>{format(nextMonthPath, 'MMMM')}<Arrow direction="right" /></a
					>
				</li>
			</ul>
		</nav>
	</Container>
</header>
