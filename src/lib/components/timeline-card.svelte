<script lang="ts">
	import type CoffeeLog from '../types/coffee-log';

	export let coffeeLog: CoffeeLog;
</script>

<div
	class="block h-full w-full max-w-sm p-12 bg-yellow-800 border border-gray-200 rounded-lg shadow hover:bg-yellow-700"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-amber-100">
		{coffeeLog.name}
	</h5>
	<p class="font-normal text-amber-50">
		{coffeeLog.description}
	</p>
</div>
