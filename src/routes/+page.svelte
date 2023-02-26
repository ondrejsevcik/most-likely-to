<script lang="ts">
	import Card from './Card.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Most Likey To</title>
</svelte:head>

<Card question={data.question.text} />
