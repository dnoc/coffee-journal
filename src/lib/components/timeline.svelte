<script lang="ts">
	import LeftButton from './left-button.svelte';
	import RightButton from './right-button.svelte';
	import TimelineCard from './timeline-card.svelte';
	import type CoffeeLog from '../types/coffee-log';

	export let coffeeLogs: CoffeeLog[] = [];

	let selectedIndex = 0;
	const left = () => {
		console.log('left');
		selectedIndex = selectedIndex === 0 ? coffeeLogs.length - 1 : selectedIndex - 1;
	};
	const right = () => {
		console.log('right');
		selectedIndex = selectedIndex === coffeeLogs.length - 1 ? 0 : selectedIndex + 1;
	};

	$: displayedLog = coffeeLogs[selectedIndex];
</script>

<div class="flex flex-row items-center w-full min-h-[60%]">
	<div class="flex justify-center w-1/5">
		<LeftButton handleClick={left} />
	</div>
	<div class="flex justify-center w-3/5">
		<TimelineCard coffeeLog={displayedLog} />
	</div>
	<div class="flex justify-center w-1/5">
		<RightButton handleClick={right} />
	</div>
</div>
