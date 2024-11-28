<script lang="ts">
	export let handleClick: () => void;
</script>

<button
	type="button"
	on:click={handleClick}
	class="text-amber-50 rotate-180 bg-yellow-800 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full p-2.5 inline-flex items-center mr-2"
>
	<svg
		aria-hidden="true"
		class="w-5 h-5"
		fill="currentColor"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
			clip-rule="evenodd"
		/>
	</svg>
	<span class="sr-only">Previous post</span>
</button>
