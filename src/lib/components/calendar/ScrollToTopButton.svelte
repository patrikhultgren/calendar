<script lang="ts">
	import classNames from 'classnames'
	import Arrow from '$lib/components/icon/Arrow.svelte'
	import { getIsFullscreen } from '$lib/utils/deviceStatus'

	const isFullscreen = getIsFullscreen()

	const showClass = isFullscreen ? 'bottom-8' : 'bottom-4'
	const hideClass = '-bottom-[4rem]'

	let toggleClass = 'show'
	let y = 0

	function goToTop() {
		document.body.scrollIntoView({ behavior: 'smooth' })
	}

	function updateClass(y: number) {
		return y > 300 ? showClass : hideClass
	}

	$: toggleClass = updateClass(y)
</script>

<svelte:window bind:scrollY={y} />

<div
	class={classNames(
		'block',
		'sm:hidden',
		'fixed',
		'transition-all',
		'ease-in-out',
		'duration-300',
		'flex',
		'w-full',
		'z-10',
		toggleClass
	)}
>
	<button
		on:click={goToTop}
		aria-label="Gå till toppen av sidan"
		type="button"
		class="p-3 bg-white mx-auto border border-gray-300 shadow"><Arrow direction="up" /></button
	>
</div>
