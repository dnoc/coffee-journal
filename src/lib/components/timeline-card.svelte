<script lang="ts">
	import type CoffeeLog from '../types/coffee-log';

	export let coffeeLog: CoffeeLog;
</script>

<div
	class="block h-full w-full max-w-sm p-12 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{coffeeLog.name}
	</h5>
	<p class="font-normal text-gray-700 dark:text-gray-400">
		{coffeeLog.description}
	</p>
</div>
