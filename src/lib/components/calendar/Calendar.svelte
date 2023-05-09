<script lang="ts">
	import classNames from 'classnames'
	import Header from './Header.svelte'
	import fetchMonth, { initialState } from '$lib/utils/fetchMonth'
	import Container from '$lib/components/Container.svelte'
	import mounted from '$lib/utils/mounted'
	import { format } from '$lib/utils/date'
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
<Container className="mt-4">
	<main>
		{#if month.loading}<div>Laddar...</div>{/if}
		{#if month.error}<div class="p-4 bg-red-100" role="alert">
				Ett fel uppstod. Försök gärna igen senare...
			</div>
		{/if}
		{#if month.weeks}
			<table class="w-full border-collapse">
				<thead>
					<tr>
						<th class="w-[5.5%]">Vecka</th>
						<th class="w-[13.5%]">Måndag</th>
						<th class="w-[13.5%]">Tisdag</th>
						<th class="w-[13.5%]">Onsdag</th>
						<th class="w-[13.5%]">Torsdag</th>
						<th class="w-[13.5%]">Fredag</th>
						<th class="w-[13.5%]">Lördag</th>
						<th class="w-[13.5%]">Söndag</th>
					</tr>
				</thead>
				<tbody>
					{#each month.weeks as week}
						<tr>
							<td class="text-center border border-gray-300 font-bold text-xl bg-gray-100"
								>{week[0].vecka}</td
							>
							{#each week as day}
								<td
									class={classNames(
										{ 'bg-red-200': day['röd dag'] === 'Ja' },
										'align-top',
										'border',
										'border-gray-300',
										'p-2'
									)}
								>
									<div class="min-h-[100px]">
										<div class="font-bold text-base">{format(day.datum, 'd')}</div>
										<div class="text-sm">{day.namnsdag.join(', ')}</div>
										<div class="text-sm text-red-600 font-bold">{day.flaggdag}</div>
									</div>
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
		{#if month.days}
			<ul class="my-8">
				{#each month.days as day}
					<li
						class={classNames(
							{ 'bg-red-200': day['röd dag'] === 'Ja' },
							'py-2',
							'px-4',
							'border-x',
							'border-t',
							'last:border-b',
							'border-gray-300'
						)}
					>
						<div>{day.datum}</div>
						<div>{day.namnsdag.join(',')}</div>
						<div>{day.flaggdag}</div>
					</li>
				{/each}
			</ul>
		{/if}
	</main>
</Container>

<style>
	.red-day {
		background-color: rgb(241, 191, 191);
	}
</style>
