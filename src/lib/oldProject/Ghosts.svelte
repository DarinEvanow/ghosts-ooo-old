<script lang="ts">
	import { PointLight, useFrame } from '@threlte/core';

	let elapsedTime = 0;
	let firstGhostAngle = 0;
	let secondGhostAngle = Math.PI * 0.33;
	let thirdGhostAngle = Math.PI * 0.66;

	let ghostPositions: { [keyof: string]: { x: number; y: number; z: number } } = {};

	useFrame(() => {
		elapsedTime += 0.03;

		firstGhostAngle = elapsedTime * 0.5;
		secondGhostAngle = elapsedTime * 0.32;
		thirdGhostAngle = -elapsedTime * 0.18;

		ghostPositions = {
			firstGhost: {
				x: Math.cos(firstGhostAngle) * 4,
				y: Math.sin(firstGhostAngle * 3),
				z: Math.sin(firstGhostAngle) * 4
			},
			secondGhost: {
				x: Math.cos(secondGhostAngle) * 5,
				y: Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5),
				z: Math.sin(secondGhostAngle) * 5
			},
			thirdGhost: {
				x: Math.cos(thirdGhostAngle) * (7 + Math.sin(thirdGhostAngle * 0.32)),
				y: Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5),
				z: Math.sin(thirdGhostAngle) * (7 + Math.sin(thirdGhostAngle * 0.5))
			}
		};
	});
</script>

<PointLight
	color={'#ff00ff'}
	intensity={2}
	distance={3}
	position={ghostPositions.firstGhost}
	shadow
/>
<PointLight
	color={'#ffff00'}
	intensity={2}
	distance={3}
	position={ghostPositions.secondGhost}
	shadow
/>
<PointLight
	color={'#00ffff'}
	intensity={2}
	distance={3}
	position={ghostPositions.thirdGhost}
	shadow
/>
