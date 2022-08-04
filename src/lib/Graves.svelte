<script lang="ts">
	import { Group, Mesh } from '@threlte/core';
	import { BoxBufferGeometry, MeshStandardMaterial } from 'three';

	const graveDimensions = {
		width: 0.6,
		height: 0.8,
		depth: 0.2
	};
	const graveGeometry = new BoxBufferGeometry(
		graveDimensions.width,
		graveDimensions.height,
		graveDimensions.depth
	);
	const graveMaterial = new MeshStandardMaterial({ color: '#b2b6b1' });

	const graveProperties = Array(50)
		.fill('')
		.map(() => {
			const angle = Math.random() * Math.PI * 2;
			const radius = 3 + Math.random() * 6;
			const x = Math.cos(angle) * radius;
			const z = Math.sin(angle) * radius;

			return {
				position: { x, y: graveDimensions.height / 2 - 0.1, z },
				rotation: { y: (Math.random() - 0.5) * 0.4, z: (Math.random() - 0.5) * 0.4 }
			};
		});
</script>

<Group>
	{#each graveProperties as graveProperty}
		<Mesh
			geometry={graveGeometry}
			material={graveMaterial}
			position={graveProperty.position}
			rotation={graveProperty.rotation}
			castShadow
		/>
	{/each}
</Group>
