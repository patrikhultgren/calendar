<script lang="ts">
	import { page } from '$app/stores'
	import { format } from '$lib/utils/date'
	import { getMonthPath } from '$lib/utils/path'

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
	<h1 class="text-2xl md:text-4xl text-center">{format(currentMonth.toString(), 'yyyy')}</h1>
	<nav>
		<ul class="flex justify-between">
			<li class="">
				<a class="block py-2" href={previousMonthPath}
					>{format(previousMonthPath.toString(), 'MMMM')}</a
				>
			</li>
			<li class="block py-2" aria-current="page">
				<a href={currentMonthPath}>{format(currentMonthPath.toString(), 'MMMM')}</a>
			</li>
			<li class="block py-2">
				<a href={nextMonthPath}>{format(nextMonthPath.toString(), 'MMMM')}</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	/* ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	} */
</style>
