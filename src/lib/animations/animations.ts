import { quartOut } from 'svelte/easing';

export const cycleOutRight = (node: any) => {
	return {
		delay: 0,
		duration: 500,
		easing: quartOut,
		css: (t: number, u: number) => `
    transform: translateX(${t * 100}%) translateY(${t * 100}%) rotate(${t * 90}deg);
    opacity: ${u};
    `
	};
};

export const cycleInRight = (node: any) => {
	return {
		delay: 500,
		duration: 500,
		easing: quartOut,
		css: (t: number, u: number) => `
    transform: translateX(-${u * 2000}px) translateY(${u * 2000}px) rotate(${t * 90}deg);
    opacity: ${t};
    `
	};
};
