<script lang="ts">
	import classNames from 'classnames'
	import Header from './Header.svelte'
	import fetchMonth, { initialState } from '$lib/utils/fetchMonth'
	import Container from '$lib/components/layout/Container.svelte'
	import mounted from '$lib/utils/mounted'
	import { format } from '$lib/utils/date'
	import type { IMonth } from '$lib/utils/fetchMonth'

	let now = new Date()

	export let currentMonth = now

	let month: IMonth = { ...initialState }

	$: {
		if (mounted) {
			month.loading = true

			fetchMonth(currentMonth).then((data) => {
				month = data
			})
		}
	}

	const columns: Array<{ short: string; long: string; class: string }> = [
		{ short: 'V', long: 'Vecka', class: 'w-[9%] sm:w-[5%]' },
		{ short: 'Mån', long: 'Måndag', class: 'w-[13%] sm:w-[14%]' },
		{ short: 'Tis', long: 'Tisdag', class: 'w-[13%] sm:w-[14%]' },
		{ short: 'Ons', long: 'Onsdag', class: 'w-[13%] sm:w-[14%]' },
		{ short: 'Tor', long: 'Torsdag', class: 'w-[13%] sm:w-[14%]' },
		{ short: 'Fre', long: 'Fredag', class: 'w-[13%] sm:w-[13%]' },
		{ short: 'Lör', long: 'Lördag', class: 'w-[13%] sm:w-[13%]' },
		{ short: 'Sön', long: 'Söndag', class: 'w-[13%] sm:w-[13%]' }
	]
</script>

<svelte:head>
	<title>Kalender</title>
	<meta name="description" content="Kalender med veckonummer" />
</svelte:head>

<Header {currentMonth} />
<Container className="pt-3 pb-8">
	<main>
		{#if month.loading}<div>Laddar...</div>{/if}
		{#if month.error}<div class="p-4 bg-red-100 mx-4 sm:mx-0" role="alert">
				Ett fel uppstod. Försök igen senare...
			</div>
		{/if}
		{#if month.weeks}
			<table class="w-full border-collapse">
				<thead>
					<tr class="[&>*]:p-1.5">
						{#each columns as column}
							<th class={column.class}
								><span class="inline sm:hidden">{column.short}</span><span class="hidden sm:inline"
									>{column.long}</span
								></th
							>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each month.weeks as week}
						<tr>
							<td class="text-center border border-gray-300 font-bold sm:text-xl bg-gray-100"
								>{week[0].week.toString().padStart(2, '0')}</td
							>
							{#each week as day}
								<td
									class={classNames(
										{
											'bg-red-200': day.isRedDay
										},
										{
											'bg-gray-100':
												!day.isRedDay && day.date.getMonth() !== currentMonth.getMonth()
										},
										format(day.date, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd')
											? 'border-2 border-gray-500'
											: 'border border-gray-300',
										'align-top',
										'p-2'
									)}
								>
									<div class="sm:min-h-[100px]">
										<div class="font-bold text-base text-center sm:text-left">
											{format(day.date, 'd')}
										</div>
										<div class="hidden sm:block">
											{#if day.flagDay}
												<div class="text-sm text-red-600 font-bold break-all">{day.flagDay}</div>
											{/if}
											{#if day.names.length}
												<div class="text-sm">{day.names.join(', ')}</div>
											{/if}
										</div>
									</div>
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		{/if}
		{#if month.weeks}
			{#each month.weeks as week}
				<article>
					<h2 class="px-4 py-2 border border-gray-300 font-bold sm:text-xl bg-gray-50 mt-8">
						Vecka {week[0].week}
					</h2>
					<ul>
						{#each week as day}
							<li
								class={classNames(
									{ 'bg-red-200': day.isRedDay },
									{
										'bg-gray-100': !day.isRedDay && day.date.getMonth() !== currentMonth.getMonth()
									},
									format(day.date, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd')
										? 'border-2 border-gray-500'
										: 'border-x border-t border-gray-300 last:border-b',
									'py-2',
									'px-4',
									'hover:bg-gray-200'
								)}
							>
								<div class="font-bold text-xl capitalize flex">
									{format(day.date, 'iiii, d MMM')}
								</div>
								{#if day.flagDay}
									<div class="text-red-600 font-bold">{day.flagDay}</div>
								{/if}
								{#if day.names.length}
									<div class="text-sm">{day.names.join(' • ')}</div>
								{/if}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		{/if}
	</main>
</Container>
