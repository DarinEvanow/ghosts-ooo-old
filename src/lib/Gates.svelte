<script lang="ts">
	import { MeshInstance } from '@threlte/core';
	import type { Mesh } from '@threlte/core';
	import { useGltf } from '@threlte/extras';
	import { derived } from 'svelte/store';

	const { gltf: stoneWall } = useGltf('/models/stoneWall.glb');
	const { gltf: stoneWallCurve } = useGltf('/models/stoneWallCurve.glb');

	const stoneWallMesh = derived(stoneWall, (gltf) => {
		if (!gltf) return undefined;
		gltf.materials.stone.metalness = 0;
		gltf.materials.stoneDark.metalness = 0;
		return gltf.nodes['stoneWall'] as Mesh;
	});

	const stoneWallCurveMesh = derived(stoneWallCurve, (gltf) => {
		if (!gltf) return undefined;
		gltf.materials.stone.metalness = 0;
		gltf.materials.stoneDark.metalness = 0;

		return gltf.nodes['stoneWallCurve'] as Mesh;
	});
</script>

{#if $stoneWallMesh && $stoneWallCurveMesh}
	<MeshInstance position={{ x: 0, y: 0.1, z: 0 }} mesh={$stoneWallMesh.clone()} />
	<MeshInstance position={{ x: 1, y: 0.1, z: 0 }} mesh={$stoneWallMesh.clone()} />
	<MeshInstance position={{ x: 2, y: 0.1, z: 0 }} mesh={$stoneWallCurveMesh.clone()} />
	<MeshInstance
		position={{ x: 2, y: 0.1, z: -1 }}
		mesh={$stoneWallMesh.clone()}
		interactive
		rotation={{ y: Math.PI / 2 }}
	/>
	<MeshInstance
		position={{ x: 2, y: 0.1, z: -2 }}
		mesh={$stoneWallMesh.clone()}
		rotation={{ y: Math.PI / 2 }}
	/>
	<MeshInstance
		position={{ x: 2, y: 0.1, z: -3 }}
		castShadow
		mesh={$stoneWallCurveMesh.clone()}
		rotation={{ y: Math.PI / 2 }}
	/>
	<MeshInstance position={{ x: 1, y: 0.1, z: -3.9 }} mesh={$stoneWallMesh.clone()} />
	<MeshInstance position={{ x: 0, y: 0.1, z: -3.9 }} mesh={$stoneWallMesh.clone()} />
	<MeshInstance
		position={{ x: -1, y: 0.1, z: -3 }}
		mesh={$stoneWallCurveMesh.clone()}
		rotation={{ y: Math.PI }}
	/>
	<MeshInstance
		position={{ x: -1.9, y: 0.1, z: -2 }}
		mesh={$stoneWallMesh.clone()}
		rotation={{ y: Math.PI / 2 }}
	/>
	<MeshInstance
		position={{ x: -1.9, y: 0.1, z: -1 }}
		mesh={$stoneWallMesh.clone()}
		rotation={{ y: Math.PI / 2 }}
	/>
	<MeshInstance
		position={{ x: -1, y: 0.1, z: 0 }}
		mesh={$stoneWallCurveMesh.clone()}
		rotation={{ y: Math.PI * 1.5 }}
	/>
{/if}
