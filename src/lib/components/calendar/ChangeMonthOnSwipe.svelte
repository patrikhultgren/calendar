<script lang="ts">
	import { goto } from '$app/navigation'
	import { swipe } from 'svelte-gestures'

	export let className: string = ''
	export let previousMonthPath: string = ''
	export let nextMonthPath: string = ''

	let direction

	function swipeHandler(event: any) {
		direction = event.detail.direction
		goto(direction === 'left' ? nextMonthPath : previousMonthPath)
	}
</script>

<div
	class={className}
	use:swipe={{ timeframe: 300, minSwipeDistance: 25, touchAction: 'pan-y' }}
	on:swipe={swipeHandler}
>
	<slot />
</div>
