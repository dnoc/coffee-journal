<script lang="ts">
	import { slide } from 'svelte/transition';
	import Input from './Input.svelte';
	let detailsOpen = false;
</script>

<form class="flex flex-col space-y-2">
	<Input label="What kind of coffee?" id="name" />
	<Input label="Roasted by" id="roaster" />
	<div class="flex justify-between p-4">
		<p>Brew details</p>
		<!-- TODO caret icon -->
		<button type="button" on:click={() => (detailsOpen = !detailsOpen)}>
			{detailsOpen ? 'Hide' : 'Show'}
		</button>
	</div>
	{#if detailsOpen}
		<div class="flex flex-col space-y-2" transition:slide>
			<Input label="Brew Method" id="brew-method" />
			<Input label="Grind Size" id="grind-size" />
			<Input label="Grinder Name" id="grinder-name" />
			<Input label="Steep Time" id="steep-time" />
			<Input label="Description" id="description" />
		</div>
	{/if}
	<Input label="Rating" id="rating" type="number" />
	<Input label="Notes" id="notes" />
	<button
		class="text-amber-50 bg-yellow-800 hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
		type="submit"
	>
		Submit
	</button>
</form>
