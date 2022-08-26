import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { linear } from 'svelte/easing';

const rotationValue = tweened(0, {
	duration: 200,
	easing: linear
});

export const rotation = writable(rotationValue);

export function beginAnimation() {
	let rotationValue: any;

	rotation.subscribe((value: any) => {
		rotationValue = value;
	});

	setInterval(async () => {
		await rotationValue.set(0.25);
		await rotationValue.set(-0.25);
		await rotationValue.set(0.25);
		await rotationValue.set(-0.25);
		await rotationValue.set(0.25);
		await rotationValue.set(-0.25);
		rotationValue.set(0);
	}, 5000);
}
