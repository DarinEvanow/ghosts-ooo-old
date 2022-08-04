<script lang="ts">
	import {
		BoxBufferGeometry,
		ConeBufferGeometry,
		MeshStandardMaterial,
		PlaneBufferGeometry,
		SphereBufferGeometry
	} from 'three';
	import { Group, Mesh, PointLight } from '@threlte/core';

	// Walls
	const wallsDimensions = {
		width: 4,
		height: 2.5,
		depth: 4
	};
	const wallsGeometry = new BoxBufferGeometry(
		wallsDimensions.width,
		wallsDimensions.height,
		wallsDimensions.depth
	);
	const wallsMaterial = new MeshStandardMaterial({ color: '#ac8e82' });

	// Roof
	const roofDimensions = {
		radius: 3.5,
		height: 1,
		segments: 4
	};
	const roofGeometry = new ConeBufferGeometry(
		roofDimensions.radius,
		roofDimensions.height,
		roofDimensions.segments
	);
	const roofMaterial = new MeshStandardMaterial({ color: '#b35f45' });

	// Door
	const doorDimensions = {
		width: 2,
		height: 2
	};
	const doorGeometry = new PlaneBufferGeometry(doorDimensions.width, doorDimensions.height);
	const doorMaterial = new MeshStandardMaterial({ color: '#aa7b7b' });

	// Bushes
	const bushGeometry = new SphereBufferGeometry(1, 16, 16);
	const bushMaterial = new MeshStandardMaterial({ color: '#89c854' });

	const bushProperties = [
		{ position: { x: 0.8, y: 0.2, z: 2.2 }, scale: 0.5 },
		{ position: { x: 1.4, y: 0.1, z: 2.1 }, scale: 0.25 },
		{ position: { x: -0.8, y: 0.1, z: 2.2 }, scale: 0.4 },
		{ position: { x: -1, y: 0.05, z: 2.6 }, scale: 0.15 }
	];
</script>

<Group>
	<Mesh
		geometry={wallsGeometry}
		material={wallsMaterial}
		position={{ y: wallsDimensions.height / 2 }}
		castShadow
	/>
	<Mesh
		geometry={roofGeometry}
		material={roofMaterial}
		position={{ y: wallsDimensions.height + roofDimensions.height / 2 }}
		rotation={{ y: Math.PI / 4 }}
	/>
	<Mesh
		geometry={doorGeometry}
		material={doorMaterial}
		position={{
			y: doorDimensions.height / 2,
			z: wallsDimensions.width / 2 + 0.01
		}}
	/>
	<PointLight
		color={'#ff7d46'}
		intensity={1}
		distance={7}
		position={{ x: 0, y: 2.2, z: 2.7 }}
		shadow={{ mapSize: [256, 256], camera: { far: 7 } }}
	/>
	{#each bushProperties as bush}
		<Mesh
			geometry={bushGeometry}
			material={bushMaterial}
			position={bush.position}
			scale={bush.scale}
			castShadow
		/>
	{/each}
</Group>
