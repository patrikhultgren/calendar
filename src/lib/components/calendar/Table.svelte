<script lang="ts">
	import classNames from 'classnames'
	import SwedishFlag from '$lib/components/icon/SwedishFlag.svelte'
	import { format } from '$lib/utils/date'
	import type { ICalendarDay } from '$lib/utils/fetchMonth'

	export let now = new Date()
	export let weeks: Array<Array<ICalendarDay>> = []
	export let currentMonth: Date = new Date()

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
		{#each weeks as week}
			<tr>
				<td class="text-center border border-gray-400 font-bold sm:text-xl bg-gray-100"
					>{week[0].week.toString().padStart(2, '0')}</td
				>
				{#each week as day}
					<td
						class={classNames(
							{
								'bg-red-200': day.isRedDay
							},
							{
								'bg-gray-100': !day.isRedDay && day.date.getMonth() !== currentMonth.getMonth()
							},
							format(day.date, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd')
								? 'border-4 border-gray-500'
								: 'border border-gray-400',
							'align-top',
							'p-2'
						)}
					>
						<div class="sm:min-h-[100px]">
							<div class="block font-bold text-base text-center sm:text-left sm:hidden">
								{format(day.date, 'd')}
							</div>
							<div class="hidden sm:flex">
								<div class="font-bold text-base text-center sm:text-left">
									{format(day.date, day.date.getDate() === 1 ? 'd MMMM' : 'd')}
								</div>
								{#if day.flagDay}
									<SwedishFlag className="w-6 h-4 ml-auto rounded bg-red-900" />
								{/if}
							</div>
							<div class="hidden sm:block">
								{#if day.flagDay}
									<div class="text-sm text-red-600 font-bold break-words">
										{day.flagDay}
									</div>
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
