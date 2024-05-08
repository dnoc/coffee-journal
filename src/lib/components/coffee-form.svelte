<script lang="ts">
	import { slide } from 'svelte/transition';
	let detailsOpen = false;
</script>

<form class="flex flex-col">
	<label for="name">What kind of coffee?</label>
	<input class="border border-gray-300" type="text" id="name" name="name" />
	<label for="roaster">Roasted by</label>
	<input class="border border-gray-300" type="text" id="roaster" name="roaster" />
	<div class="flex justify-between p-4">
		<p>Brew details</p>
		<button type="button" on:click={() => (detailsOpen = !detailsOpen)}>
			{detailsOpen ? 'Hide' : 'Show'}
		</button>
	</div>
	{#if detailsOpen}
		<div class="flex flex-col" transition:slide>
			<label for="brew-method">Brew Method</label>
			<input class="border border-gray-300" type="text" id="brew-method" name="brew-method" />
			<label for="grind-size">Grind Size</label>
			<input class="border border-gray-300" type="text" id="grind-size" name="grind-size" />
			<label for="grinder-name">Grinder Name</label>
			<input class="border border-gray-300" type="text" id="grinder-name" name="grinder-name" />
			<label for="steep-time">Steep Time</label>
			<input class="border border-gray-300" type="text" id="steep-time" name="steep-time" />
			<label for="description">Description</label>
			<input class="border border-gray-300" type="text" id="description" name="description" />
		</div>
	{/if}
	<label for="rating">Rating</label>
	<input class="border border-gray-300" type="number" id="rating" name="rating" />
	<label for="notes">Notes</label>
	<input class="border border-gray-300" type="text" id="notes" name="notes" />
	<button
		class="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
		type="submit"
	>
		Submit
	</button>
</form>
