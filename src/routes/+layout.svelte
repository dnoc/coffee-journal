<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/nav.svelte';
</script>

<div class="text-amber-50 bg-yellow-900 h-screen">
	<Nav />
	<slot />
</div>
