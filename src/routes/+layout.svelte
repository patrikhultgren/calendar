<script>
	import '$lib/css/style.css'
	import { onMount } from 'svelte'
	import onInterval from '$lib/utils/onInterval'
	import { online, isFullscreen } from '$lib/stores'
	import Footer from './Footer.svelte'

	function setOnline() {
		online.set(navigator.onLine)
	}

	onInterval(setOnline, 1000)

	onMount(() => {
		isFullscreen.set(window.matchMedia('(display-mode: fullscreen)').matches)
	})
</script>

<slot />

<Footer />
