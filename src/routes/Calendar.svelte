<script lang="ts">
	import { onMount } from 'svelte'
	import fetchMonth from '$lib/utils/fetchMonth'

	export let date = new Date()

	let month: any

	onMount(async function () {
		month = await fetchMonth(date.getFullYear(), date.getMonth())
	})
</script>

<svelte:head>
	<title>Kalender</title>
	<meta name="description" content="Kalender med veckonummer" />
</svelte:head>

<section>
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
			{#if month}
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
			{/if}
		</tbody>
	</table>
	{#if month}
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
</section>

<style>
	.red-day {
		background-color: rgb(241, 191, 191);
	}
</style>
