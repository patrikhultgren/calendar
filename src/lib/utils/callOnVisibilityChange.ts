import { onMount, onDestroy } from 'svelte'
import { browser } from '$app/environment'

const callOnVisibilityChange = (callback: any) => {
	onMount(() => {
		document.addEventListener('visibilitychange', callback)
	})

	onDestroy(() => {
		if (browser) {
			console.log('remove')
			document.removeEventListener('visibilitychange', callback)
		}
	})
}

export default callOnVisibilityChange
