<script lang="ts">
	export let close: () => void;
</script>

<button
	on:click={close}
	class="text-amber-50 rotate-45 bg-yellow-800 hover:bg-yellow-700 focus:ring-2 focus:outline-none focus:ring-blue-300 rounded-full p-1 inline-flex items-center"
>
	<svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<g>
			<line
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				x1="12"
				x2="12"
				y1="19"
				y2="5"
			/>
			<line
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				x1="5"
				x2="19"
				y1="12"
				y2="12"
			/>
		</g>
	</svg>
</button>
