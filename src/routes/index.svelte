<script lang="ts">
	import Scene from '$lib/Scene.svelte';
</script>

<div>
	<Scene />
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		font-size: 100%;
		vertical-align: baseline;
		background: transparent;
	}

	div {
		height: 100vh;
		width: 100vw;
	}
</style>
