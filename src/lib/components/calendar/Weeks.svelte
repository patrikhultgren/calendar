<script lang="ts">
	import classNames from 'classnames'
	import SwedishFlag from '$lib/components/icon/SwedishFlag.svelte'
	import { format } from '$lib/utils/date'
	import type { ICalendarDay } from '$lib/utils/fetchMonth'

	export let now = new Date()
	export let weeks: Array<Array<ICalendarDay>> = []
	export let activeMonth: Date = new Date()
</script>

{#each weeks as week}
	<article>
		<h2
			class="px-4 py-2 border border-gray-400 font-bold sm:text-xl bg-gray-50 mt-8 text-xl sm:text-2xl"
		>
			Vecka {week[0].week}
		</h2>
		<ul>
			{#each week as day}
				<li
					class={classNames(
						{ 'bg-red-100': day.isRedDay },
						{
							'bg-gray-100': !day.isRedDay && day.date.getMonth() !== activeMonth.getMonth()
						},
						format(day.date, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd')
							? 'border-4 border-gray-500'
							: 'border-x border-t border-gray-400 first:border-t-0 last:border-b',
						'py-2',
						'px-4'
					)}
				>
					<div class="flex items-center">
						<div>
							<div class="font-bold sm:text-xl capitalize flex">
								{format(day.date, 'iiii, d MMM')}
							</div>
						</div>
						{#if day.flagDay}
							<SwedishFlag className="w-6 h-4 ml-4 rounded" />
						{/if}
					</div>
					{#if day.flagDay}
						<div class="text-red-700 font-bold">{day.flagDay}</div>
					{:else if day.holiday}
						<div class="text-red-700 font-bold">{day.holiday}</div>
					{:else if day.holidayEvening}
						<div class="text-red-700 font-bold">{day.holidayEvening}</div>
					{/if}
					{#if day.names.length}
						<div class="text-sm">{day.names.join(' • ')}</div>
					{/if}
				</li>
			{/each}
		</ul>
	</article>
{/each}
