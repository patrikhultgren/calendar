import { onMount } from 'svelte'

export const getIsFullscreen = (): boolean => {
	let isFullscreen = false

	onMount(() => {
		isFullscreen = true
		// isFullscreen = window.matchMedia('(display-mode: fullscreen)').matches
	})

	return isFullscreen
}
