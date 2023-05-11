<script>
	import '$lib/css/style.css'
	import onInterval from '$lib/utils/onInterval'
	import { online } from '$lib/stores'
	import Footer from './Footer.svelte'

	function setOnline() {
		online.set(navigator.onLine)
	}

	onInterval(setOnline, 1000)
</script>

<slot />

<Footer />
