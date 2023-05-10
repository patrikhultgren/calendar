<script lang="ts">
	import IoIosArrowRoundBack from 'svelte-icons/io/IoIosArrowRoundBack.svelte'
	import IoIosArrowRoundForward from 'svelte-icons/io/IoIosArrowRoundForward.svelte'
	import IoIosArrowRoundUp from 'svelte-icons/io/IoIosArrowRoundUp.svelte'
	import IoIosArrowRoundDown from 'svelte-icons/io/IoIosArrowRoundDown.svelte'
	export let direction: 'left' | 'right' | 'up' | 'down' = 'right'
</script>

<div class="w-8 h-8">
	{#if direction === 'left'}
		<IoIosArrowRoundBack title="Pil vänster" />
	{:else if direction === 'right'}
		<IoIosArrowRoundForward title="Pil höger" />
	{:else if direction === 'up'}
		<IoIosArrowRoundUp title="Pil upp" />
	{:else if direction === 'down'}
		<IoIosArrowRoundDown title="Pil ner" />
	{/if}
</div>
