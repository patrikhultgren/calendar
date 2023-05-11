<script lang="ts">
	import { format } from '$lib/utils/date'
	import { getMonthPath } from '$lib/utils/path'
	import Container from '$lib/components/utils/Container.svelte'
	import Arrow from '$lib/components/icon/Arrow.svelte'

	export let previousMonth: Date = new Date()
	export let previousMonthPath: string = ''
	export let currentMonth: Date = new Date()
	export let nextMonth: Date = new Date()
	export let nextMonthPath: string = ''
</script>

<header>
	<Container className="border-b border-gray-300">
		<nav aria-label="Huvudmeny" class="flex justify-between">
			<a
				class="flex py-4 px-1 sm:px-4 items-center capitalize rounded sm:text-xl font-bold"
				href={previousMonthPath}
			>
				<Arrow direction="left" />
				<span class="inline sm:hidden">{format(previousMonth, 'MMM')}</span>
				<span class="hidden sm:inline">{format(previousMonth, 'MMMM')}</span>
			</a>
			<h1 class="flex items-center capitalize px-4 text-2xl sm:text-4xl font-bold">
				<span class="inline sm:hidden">{format(currentMonth, 'MMM yyyy')}</span>
				<span class="hidden sm:inline">{format(currentMonth, 'MMMM yyyy')}</span>
			</h1>
			<a
				class="flex py-4 px-1 sm:px-4 items-center capitalize rounded sm:text-xl font-bold"
				href={nextMonthPath}
			>
				<span class="inline sm:hidden">{format(nextMonth, 'MMM')}</span>
				<span class="hidden sm:inline">{format(nextMonth, 'MMMM')}</span>
				<Arrow direction="right" />
			</a>
		</nav>
	</Container>
</header>
