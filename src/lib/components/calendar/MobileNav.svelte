<script lang="ts">
	import { onMount } from 'svelte'
	import classNames from 'classnames'
	import { format } from '$lib/utils/date'
	import { isFullscreen } from '$lib/stores'
	import Arrow from '$lib/components/icon/Arrow.svelte'

	export let previousMonth: Date = new Date()
	export let previousMonthPath: string = ''
	export let nextMonth: Date = new Date()
	export let nextMonthPath: string = ''

	$: showClass = $isFullscreen ? 'bottom-8' : 'bottom-4'
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

<nav
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
	aria-label="Mobilmeny"
>
	<a
		class="flex p-3 items-center capitalize rounded font-bold ml-auto bg-white border border-gray-300 shadow"
		href={previousMonthPath}
	>
		<Arrow direction="left" />
		<span class="inline sm:hidden">{format(previousMonth, 'MMM')}</span>
		<span class="hidden sm:inline">{format(previousMonth, 'MMMM')}</span>
	</a>
	<button
		on:click={goToTop}
		aria-label="Gå till toppen av sidan"
		type="button"
		class="p-3 bg-white border border-gray-300 shadow mx-4 block"><Arrow direction="up" /></button
	>
	<a
		class="flex p-3 items-center capitalize rounded font-bold mr-auto bg-white border border-gray-300 shadow"
		href={nextMonthPath}
	>
		<span class="inline sm:hidden">{format(nextMonth, 'MMM')}</span>
		<span class="hidden sm:inline">{format(nextMonth, 'MMMM')}</span>
		<Arrow direction="right" />
	</a>
</nav>
