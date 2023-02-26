<script lang="ts">
	export let question: string;
</script>

<div class="card">
	<p class="question">{question}</p>

	<button class="btn-next">See next</button>
</div>

<style>
	.card {
		background-color: white;
		border-radius: 10px;

		max-width: 320px;
		height: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		color: var(--color-text-dark);
		padding: 1rem;
	}

	.question {
		/* TODO change */
		font-family: 'Raleway';
		font-weight: 500;
		font-size: 44px;
		line-height: 1.2;

		/* TODO align to center always - use variable fonts */
		margin-bottom: 3rem;
	}

	.btn-next {
		border: 2px solid var(--color-text-dark);
		background-color: white;

		font-family: Inter;
		font-weight: 600;
		font-size: 20px;
		line-height: 1.2;
		text-transform: uppercase;

		padding: 1rem;
	}
</style>
