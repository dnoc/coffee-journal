<script lang="ts">
	import LeftButton from './left-button.svelte';
	import RightButton from './right-button.svelte';
	import TimelineCard from './timeline-card.svelte';
	import type CoffeeLog from '../types/coffee-log';
	import { fly } from 'svelte/transition';
	import { cycleInRight, cycleOutRight } from '$lib/animations/animations';

	export let coffeeLogs: CoffeeLog[] = [];

	let selectedIndex = 0;
	let flyRight = true;
	const left = () => {
		console.log('left');
		flyRight = false;
		selectedIndex = selectedIndex === 0 ? coffeeLogs.length - 1 : selectedIndex - 1;
	};
	const right = () => {
		console.log('right');
		flyRight = true;
		selectedIndex = selectedIndex === coffeeLogs.length - 1 ? 0 : selectedIndex + 1;
	};

	$: displayedLog = coffeeLogs[selectedIndex];
</script>

<div class="flex flex-row items-center w-full min-h-[60%]">
	<div class="flex justify-center w-1/5">
		<LeftButton handleClick={left} />
	</div>
	{#key selectedIndex}
		<div class="flex justify-center w-3/5" in:cycleInRight out:cycleOutRight>
			<TimelineCard coffeeLog={displayedLog} />
		</div>
	{/key}
	<div class="flex justify-center w-1/5">
		<RightButton handleClick={right} />
	</div>
</div>
