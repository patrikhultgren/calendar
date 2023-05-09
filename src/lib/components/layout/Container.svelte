<script lang="ts">
	import classNames from 'classnames'
	export let className: string = ''
</script>

<div class={classNames('mx-auto', 'relative', 'max-w-[1000px]', 'bg-white', className)}>
	<div class="md:px-10">
		<slot />
	</div>
</div>
