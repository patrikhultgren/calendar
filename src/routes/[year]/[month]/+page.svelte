<script lang="ts">
	import Calendar from '$lib/components/calendar/Calendar.svelte'
	import { months } from '$lib/config'
	export let data: any
</script>

<Calendar currentMonth={new Date(data.year, months.indexOf(data.month))} />
