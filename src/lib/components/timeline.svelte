<script lang="ts">
	import LeftButton from './left-button.svelte';
	import RightButton from './right-button.svelte';
	import TimelineCard from './timeline-card.svelte';
	import type CoffeeLog from '../types/coffee-log';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	export let coffeeLogs: CoffeeLog[] = [];

	let emblaApi: any;
	const emblaConfig = {
		options: {
			loop: true
		},
		plugins: []
	};
	function onInit(event: any): void {
		emblaApi = event.detail;
	}
</script>

<div class="flex flex-row items-center w-full min-h-[60%]">
	<div class="flex justify-center w-1/5">
		<LeftButton handleClick={emblaApi?.scrollPrev} />
	</div>
	<div class="embla" use:emblaCarouselSvelte={emblaConfig} on:emblaInit={onInit}>
		<div class="embla__container">
			{#each coffeeLogs as log}
				<div class="embla__slide flex justify-center w-3/5">
					<TimelineCard coffeeLog={log} />
				</div>
			{/each}
		</div>
	</div>
	<div class="flex justify-center w-1/5">
		<RightButton handleClick={emblaApi?.scrollNext} />
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
