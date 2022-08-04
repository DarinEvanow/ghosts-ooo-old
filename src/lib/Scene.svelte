<script lang="ts">
	import { onMount } from 'svelte';
	import { PerspectiveCamera } from 'three';
	import { AmbientLight, CameraInstance, Canvas, OrbitControls } from '@threlte/core';

	import Ground from '$lib/Ground.svelte';
	import House from '$lib/House.svelte';
	import Graves from '$lib/Graves.svelte';

	let sizes: { width: number; height: number };
	let camera: PerspectiveCamera;

	onMount(() => {
		sizes = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		window.addEventListener('resize', () => {
			// Update sizes
			sizes.width = window.innerWidth;
			sizes.height = window.innerHeight;

			// Update camera
			camera.aspect = sizes.width / sizes.height;
		});

		camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
		camera.position.x = 4;
		camera.position.y = 2;
		camera.position.z = 5;
	});
</script>

<Canvas>
	<CameraInstance useCamera {camera}>
		<OrbitControls enableZoom={false} />
	</CameraInstance>

	<AmbientLight color="#ffffff" intensity={0.3} />
	<Ground />
	<House />
	<Graves />
</Canvas>
