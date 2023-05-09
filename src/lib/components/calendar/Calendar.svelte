<script lang="ts">
	import Header from './Header.svelte'
	import fetchMonth, { initialState } from '$lib/utils/fetchMonth'
	import mounted from '$lib/utils/mounted'
	import type { IMonth } from '$lib/utils/fetchMonth'

	export let currentMonth = new Date()

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
	<title>Kalender</title>
	<meta name="description" content="Kalender med veckonummer" />
</svelte:head>

<Header {currentMonth} />
<main>
	{#if month.loading}<div>Laddar...</div>{/if}
	{#if month.error}<div>Ett fel uppstod</div>{/if}
	{#if month.weeks}
		<table>
			<thead>
				<tr>
					<th>Vecka</th>
					<th>Måndag</th>
					<th>Tisdag</th>
					<th>Onsdag</th>
					<th>Torsdag</th>
					<th>Fredag</th>
					<th>Lördag</th>
					<th>Söndag</th>
				</tr>
			</thead>
			<tbody>
				{#each month.weeks as week}
					<tr>
						<td>{week[0].vecka}</td>
						{#each week as day}
							<td class={day['röd dag'] === 'Ja' ? 'red-day' : ''}>
								<p>{day.datum}</p>
								<p>{day.namnsdag.join(',')}</p>
								<p>{day.flaggdag}</p>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
	{#if month.days}
		<ul>
			{#each month.days as day}
				<li class={day['röd dag'] === 'Ja' ? 'red-day' : ''}>
					<p>{day.datum}</p>
					<p>{day.namnsdag.join(',')}</p>
					<p>{day.flaggdag}</p>
				</li>
			{/each}
		</ul>
	{/if}
</main>

<style>
	.red-day {
		background-color: rgb(241, 191, 191);
	}
</style>
