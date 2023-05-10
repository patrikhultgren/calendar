<script>
	import '$lib/css/style.css'
	import { goto } from '$app/navigation'
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { onMount, onDestroy } from 'svelte'

	function onVisibilityChange() {
		if (page.url === '/') {
			window.location.reload()
		} else {
			goto('/')
		}
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
