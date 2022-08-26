<script lang="ts">
	import { derived } from 'svelte/store';
	import { MeshInstance } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { rotation, beginAnimation } from '$lib/animation';

	let rotationValue: any;

	rotation.subscribe((value: any) => {
		rotationValue = value;
	});

	beginAnimation();

	const { gltf: graveGltf } = useGltf('/models/gravestoneFlat.glb');
	const graveMesh = derived(graveGltf, (gltf) => {
		if (!gltf) return undefined;
		gltf.materials.stone.metalness = 0;
		return gltf.nodes['gravestoneFlat'] as Mesh;
	});
</script>

{#if $graveMesh}
	<MeshInstance
		interactive
		position={{ x: 0, y: 0.1, z: -1.5 }}
		mesh={$graveMesh.clone()}
		rotation={{ y: $rotationValue }}
	/>
{/if}
