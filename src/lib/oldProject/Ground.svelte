<script lang="ts">
	import {
		Float32BufferAttribute,
		MeshStandardMaterial,
		PlaneBufferGeometry,
		RepeatWrapping
	} from 'three';

	import { Mesh, useTexture } from '@threlte/core';

	const groundGeometry = new PlaneBufferGeometry(20, 20);

	groundGeometry.setAttribute(
		'uv2',
		new Float32BufferAttribute(groundGeometry.attributes.uv.array, 2)
	);

	const grassTextures = useTexture({
		color: '/textures/grass/color.jpg',
		ambientOcclusion: '/textures/grass/ambientOcclusion.jpg',
		normal: '/textures/grass/normal.jpg',
		roughness: '/textures/grass/roughness.jpg'
	});

	grassTextures.color.repeat.set(8, 8);
	grassTextures.ambientOcclusion.repeat.set(8, 8);
	grassTextures.normal.repeat.set(8, 8);
	grassTextures.roughness.repeat.set(8, 8);

	grassTextures.color.wrapS = RepeatWrapping;
	grassTextures.ambientOcclusion.wrapS = RepeatWrapping;
	grassTextures.normal.wrapS = RepeatWrapping;
	grassTextures.roughness.wrapS = RepeatWrapping;

	grassTextures.color.wrapT = RepeatWrapping;
	grassTextures.ambientOcclusion.wrapT = RepeatWrapping;
	grassTextures.normal.wrapT = RepeatWrapping;
	grassTextures.roughness.wrapT = RepeatWrapping;

	const groundMaterial = new MeshStandardMaterial({
		color: '#a9c388',
		map: grassTextures.color,
		aoMap: grassTextures.ambientOcclusion,
		normalMap: grassTextures.normal,
		roughnessMap: grassTextures.roughness
	});
</script>

<Mesh
	geometry={groundGeometry}
	material={groundMaterial}
	position={{ y: 0 }}
	rotation={{ x: -Math.PI * 0.5 }}
	receiveShadow
/>
