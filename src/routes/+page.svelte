<script lang="ts">
	import Card from './Card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let question: string = data.question;

	async function showNext() {
		const response = await fetch('/api/question');
		const json = await response.json();
		question = json.question;
	}
</script>

<svelte:head>
	<title>Most Likey To</title>
</svelte:head>

<Card {question} onNextClick={showNext} />
