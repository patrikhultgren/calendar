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

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === previousMonthPath ? 'page' : undefined}>
				<a href={previousMonthPath}>{format(previousMonthPath.toString(), 'MMMM')}</a>
			</li>
			<li aria-current={$page.url.pathname === currentMonthPath ? 'page' : undefined}>
				<a href={currentMonthPath}>{format(currentMonthPath.toString(), 'MMMM')}</a>
			</li>
			<li aria-current={$page.url.pathname === nextMonthPath ? 'page' : undefined}>
				<a href={nextMonthPath}>{format(nextMonthPath.toString(), 'MMMM')}</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
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
	}
</style>
