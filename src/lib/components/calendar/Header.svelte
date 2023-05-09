<script lang="ts">
	import { format } from '$lib/utils/date'
	import { getMonthPath } from '$lib/utils/path'
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
	<h1 class="text-2xl md:text-4xl text-center bg-green-600 text-white py-2">
		{format(currentMonth.toString(), 'yyyy')}
	</h1>
	<nav>
		<ul class="flex justify-between">
			<li class="">
				<a
					class="flex py-2 px-4 items-center capitalize bg-slate-50 rounded"
					href={previousMonthPath}
					><Arrow direction="left" />{format(previousMonthPath.toString(), 'MMMM')}</a
				>
			</li>
			<li class="flex items-center bg-slate-100 capitalize px-4" aria-current="page">
				{format(currentMonthPath.toString(), 'MMMM')}
			</li>
			<li>
				<a class="flex py-2 px-4 items-center capitalize bg-slate-50 rounded" href={nextMonthPath}
					>{format(nextMonthPath.toString(), 'MMMM')}<Arrow direction="right" /></a
				>
			</li>
		</ul>
	</nav>
</header>
