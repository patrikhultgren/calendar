<script lang="ts">
	import classNames from 'classnames'

	export let className = ''
</script>

<div class={classNames('placeholder', className)}>
	<div class={classNames('placeholder__animated-background', className)} />
</div>
