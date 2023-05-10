<script lang="ts">
	import Calendar from '$lib/components/calendar/Calendar.svelte'
	import { MONTHS } from '$lib/config'
	export let data: any
</script>

<Calendar currentMonth={new Date(data.year, MONTHS.indexOf(data.month))} />
