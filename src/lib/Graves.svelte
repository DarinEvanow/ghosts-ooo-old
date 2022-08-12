<script lang="ts">
	import { Object3DInstance } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	const { gltf } = useGltf('/models/gravestoneFlat.glb');
	$: if ($gltf) {
		$gltf.materials.stone.metalness = 0;
	}
</script>

{#if $gltf}
	<Object3DInstance
		position={{ x: 0, y: 0.1, z: -1.5 }}
		castShadow
		object={$gltf.nodes['gravestoneFlat']}
	/>
{/if}
