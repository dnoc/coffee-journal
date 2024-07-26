<script lang="ts">
	export let id;
	export let label;
	export let type = 'text';
</script>

<!-- TODO squiggly bottom border -->
<div class="flex flex-col">
	<label for={id}>{label}</label>
	<input
		class="caret-fuchsia-200 border-b-2 border-fuchsia-200 bg-yellow-900 focus:outline-none"
		{type}
		{id}
		name={id}
	/>
</div>
