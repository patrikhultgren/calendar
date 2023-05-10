<script>
	import '$lib/css/style.css'
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { onMount, onDestroy } from 'svelte'

	function onVisibilityChange() {
		window.location.reload()
	}

	onMount(() => {
		document.addEventListener('visibilitychange', onVisibilityChange)
	})

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('visibilitychange', onVisibilityChange)
		}
	})
</script>

<slot />
