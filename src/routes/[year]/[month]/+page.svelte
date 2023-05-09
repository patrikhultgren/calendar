<script lang="ts">
	import Calendar from '../../Calendar.svelte'
	export let data: any
</script>

<Calendar currentMonth={new Date(data.year, parseInt(data.month) - 1)} />
