<script lang="ts">
	import IoIosArrowRoundBack from 'svelte-icons/io/IoIosArrowRoundBack.svelte'
	import IoIosArrowRoundForward from 'svelte-icons/io/IoIosArrowRoundForward.svelte'
	export let direction: 'left' | 'right' | 'up' | 'down' = 'right'
</script>

<div class="w-8 h-8">
	{#if direction === 'left'}
		<IoIosArrowRoundBack />
	{:else if direction === 'right'}
		<IoIosArrowRoundForward />
	{/if}
</div>
