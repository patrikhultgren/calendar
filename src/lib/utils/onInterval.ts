import { onDestroy } from 'svelte'

export default function onInterval(callback: Function, milliseconds: number) {
	const interval = setInterval(callback, milliseconds)

	onDestroy(() => {
		clearInterval(interval)
	})
}
