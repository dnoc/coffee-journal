<script lang="ts">
	import Timeline from '$lib/components/timeline.svelte';
	import type CoffeeLog from '$lib/types/coffee-log';
	import Footer from '$lib/components/footer.svelte';
	import DraftButton from '$lib/components/draft-button.svelte';

	let footerOpen = false;
	const fakeLogs: CoffeeLog[] = [
		{
			name: 'Lorem Ipsum',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta placeat sit consequatur voluptas culpa architecto officia dignissimos neque, laudantium hic provident porro error ea saepe. A temporibus placeat consequatur soluta.'
		},
		{
			name: 'Oven',
			description: 'why do they call it oven when you of in the cold food, of out eat the hot food?'
		},
		{
			name: 'Arabica',
			description: 'Mild fruity note'
		}
	];
</script>

<div class="flex flex-col items-center gap-8 h-screen">
	<h2 class="text-xl">How's the coffee today?</h2>
	<Timeline coffeeLogs={fakeLogs} />
	<div>
		<DraftButton handleClick={() => (footerOpen = !footerOpen)} />
	</div>
	<Footer bind:open={footerOpen} />
</div>
