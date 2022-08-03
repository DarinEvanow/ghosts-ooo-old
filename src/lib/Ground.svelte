<script lang="ts">
	import { MeshStandardMaterial, PlaneBufferGeometry } from 'three';

	import { Mesh } from '@threlte/core';

	const groundGeometry = new PlaneBufferGeometry(20, 20);
	const groundMaterial = new MeshStandardMaterial({ color: '#a9c388' });
</script>

<Mesh
	geometry={groundGeometry}
	material={groundMaterial}
	position={{ y: 0 }}
	rotation={{ x: -Math.PI * 0.5 }}
/>
