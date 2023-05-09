import { onMount } from 'svelte'

const mounted = {
	subscribe(fn: any) {
		fn(false)
		onMount(() => fn(true))
		return () => {}
	}
}

export default mounted
