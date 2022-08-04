<script lang="ts">
	import { AmbientLight, DirectionalLight, Fog, useThrelte } from '@threlte/core';

	const { renderer } = useThrelte();
	renderer!.setClearColor('#262837');
</script>

<AmbientLight color="#b9d5ff" intensity={0.12} />
<DirectionalLight
	color={'#b9d5ff'}
	intensity={0.12}
	position={{ x: 4, y: 5, z: -2 }}
	shadow={{ mapSize: [256, 256], camera: { far: 15 } }}
/>
<Fog color="#262837" near={1} far={15} />
