<script lang="ts">
	import Calendar from '$lib/components/calendar/Calendar.svelte'
	export let data: any

	const months: { [key: string]: number } = {
		januari: 0,
		februari: 1,
		mars: 2,
		april: 3,
		maj: 4,
		juni: 5,
		juli: 6,
		augusti: 7,
		september: 8,
		oktober: 9,
		november: 10,
		december: 11
	}
</script>

<Calendar currentMonth={new Date(data.year, months[data.month])} />
