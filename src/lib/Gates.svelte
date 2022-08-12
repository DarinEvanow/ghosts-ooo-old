<script lang="ts">
	import { Object3DInstance } from '@threlte/core';
	import { useGltf } from '@threlte/extras';

	const { gltf: stoneWall } = useGltf('/models/stoneWall.glb');
	const { gltf: stoneWallCurve } = useGltf('/models/stoneWallCurve.glb');

	$: if ($stoneWall) {
		$stoneWall.materials.stone.metalness = 0;
		$stoneWall.materials.stoneDark.metalness = 0;
	}

	$: if ($stoneWallCurve) {
		$stoneWallCurve.materials.stone.metalness = 0;
		$stoneWallCurve.materials.stoneDark.metalness = 0;
	}
</script>

{#if $stoneWall && $stoneWallCurve}
	<Object3DInstance
		position={{ x: 0, y: 0.1, z: 0 }}
		castShadow
		object={$stoneWall.nodes['stoneWall']}
	/>
	<Object3DInstance
		position={{ x: 1, y: 0.1, z: 0 }}
		castShadow
		object={$stoneWall.nodes['stoneWall']?.clone()}
	/>
	<Object3DInstance
		position={{ x: 2, y: 0.1, z: 0 }}
		castShadow
		object={$stoneWallCurve.nodes['stoneWallCurve']}
	/>
	<Object3DInstance
		position={{ x: 2, y: 0.1, z: -1 }}
		castShadow
		object={$stoneWall.nodes['stoneWall']?.clone()}
		rotation={{ y: Math.PI / 2 }}
	/>
	<Object3DInstance
		position={{ x: 2, y: 0.1, z: -2 }}
		castShadow
		object={$stoneWall.nodes['stoneWall']?.clone()}
		rotation={{ y: Math.PI / 2 }}
	/>
	<Object3DInstance
		position={{ x: 2, y: 0.1, z: -3 }}
		castShadow
		object={$stoneWallCurve.nodes['stoneWallCurve']?.clone()}
		rotation={{ y: Math.PI / 2 }}
	/>
	<Object3DInstance
		position={{ x: 1, y: 0.1, z: -3.9 }}
		castShadow
		object={$stoneWall.nodes['stoneWall']?.clone()}
	/>
	<Object3DInstance
		position={{ x: 0, y: 0.1, z: -3.9 }}
		castShadow
		object={$stoneWall.nodes['stoneWall']?.clone()}
	/>
	<Object3DInstance
		position={{ x: -1, y: 0.1, z: -3 }}
		castShadow
		object={$stoneWallCurve.nodes['stoneWallCurve']?.clone()}
		rotation={{ y: Math.PI }}
	/>
	<Object3DInstance
		position={{ x: -1.9, y: 0.1, z: -2 }}
		castShadow
		object={$stoneWall.nodes['stoneWall']?.clone()}
		rotation={{ y: Math.PI / 2 }}
	/>
	<Object3DInstance
		position={{ x: -1.9, y: 0.1, z: -1 }}
		castShadow
		object={$stoneWall.nodes['stoneWall']?.clone()}
		rotation={{ y: Math.PI / 2 }}
	/>
	<Object3DInstance
		position={{ x: -1, y: 0.1, z: 0 }}
		castShadow
		object={$stoneWallCurve.nodes['stoneWallCurve']?.clone()}
		rotation={{ y: Math.PI * 1.5 }}
	/>
{/if}
