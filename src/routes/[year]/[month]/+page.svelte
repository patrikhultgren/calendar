<script lang="ts">
	import Calendar from '../../Calendar.svelte'
	export let data: any
</script>

<Calendar date={new Date(data.year, data.month)} />
