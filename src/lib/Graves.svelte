<script lang="ts">
	import { Object3DInstance } from '@threlte/core';
	import { useGltf, GLTF } from '@threlte/extras';

	const { gltf } = useGltf('/models/bench.glb');
	$: if ($gltf) {
		$gltf.materials.stone.metalness = 0;
		$gltf.materials.wood.metalness = 0;
	}
</script>

{#if $gltf}
	<Object3DInstance position={{ x: 0, y: 0.1, z: 0 }} castShadow object={$gltf.nodes['bench']} />
{/if}
