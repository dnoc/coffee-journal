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

<div class="flex flex-row items-center w-full min-h-[60%] px-4 sm:px-0">
	<div class="embla w-full" use:emblaCarouselSvelte={emblaConfig} on:emblaInit={onInit}>
		<div class="embla__container flex">
			{#each coffeeLogs as log}
				<div class="embla__slide flex justify-center min-w-0">
					<TimelineCard coffeeLog={log} />
				</div>
			{/each}
		</div>
	</div>
</div>
<div class="fixed buttons-bottom md:left-20 left-1/4">
	<LeftButton handleClick={emblaApi?.scrollPrev} />
</div>
<div class="fixed buttons-bottom md:right-20 right-1/4">
	<RightButton handleClick={emblaApi?.scrollNext} />
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__slide {
		flex: 0 0 100%;
	}

	.buttons-bottom {
		bottom: 16%;
	}

	@media (min-width: 768px) {
		.buttons-bottom {
			bottom: 50%;
		}
	}
</style>
