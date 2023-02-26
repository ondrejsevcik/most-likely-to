<script lang="ts">
	export let question: string;
	export let onNextClick: () => void;
</script>

<div class="card">
	<p class="question">{question}</p>

	<button class="btn-next" on:click={onNextClick}>See next</button>
</div>

<style>
	.card {
		border-radius: 10px;
		background-color: white;
		color: var(--color-text-dark);

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 70vh;
		max-height: 600px;
		width: 100%;
		max-width: 500px;

		padding: 1rem;
		padding-top: 3rem;
		gap: 0.5rem;
	}

	.question {
		font-family: 'Raleway';
		font-weight: 500;
		font-size: 2.75rem;
		line-height: 1.2;
	}

	@media screen and (max-height: 400px) {
		.card {
			padding: 1rem;
			height: initial;
		}

		.question {
			/* TODO use variable fonts */
			font-size: 2rem;
		}
	}

	.btn-next {
		border: 2px solid var(--color-text-dark);
		background-color: white;
		color: var(--color-text-dark);

		font-family: Inter;
		font-weight: 600;
		font-size: 20px;
		line-height: 1.2;
		text-transform: uppercase;

		padding: 1rem;
	}
</style>
