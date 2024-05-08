<script lang="ts">
	import CoffeeForm from '$lib/components/coffee-form.svelte';

	export let open = false;
	const preventScrolling = () => {
		const body = document.querySelector('body');
		body.style.overflow = open ? 'hidden' : 'auto';
	};

	const closeWithEscape = (e: KeyboardEvent) => {
		if (open && e.key === 'Escape') {
			open = false;
		}
	};

	$: {
		if (open) preventScrolling();
	}
</script>

<aside class="drawer" class:open on:keydown={closeWithEscape} tabIndex={-1}>
	<div class="overlay" on:click={() => (open = false)} on:keydown={closeWithEscape} tabIndex={-1} />

	<div class="panel p-6 rounded-t-3xl bg-yellow-900">
		<button on:click={() => (open = false)}>Close</button>
		<CoffeeForm />
	</div>
</aside>

<style>
	.drawer {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
		transition: z-index 0.4s step-end;
	}
	.drawer.open {
		z-index: 99;
		transition: z-index 0.4s step-start;
	}
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(100, 100, 100, 0.5);
		opacity: 0;
		z-index: 2;
		transition: opacity 0.4s ease;
	}
	.drawer.open .overlay {
		opacity: 1;
	}
	.panel {
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 3;
		transition: transform 0.4s ease;
		overflow: auto;
		bottom: 0;
		transform: translate(0, 100%);
		max-height: 60%;
	}
	.drawer.open .panel {
		transform: translate(0, 0);
	}
</style>
