<script lang="ts">
	export let onClick: () => void;
</script>

<button on:click={onClick}>
	<slot />
</button>

<style>
	:root {
		--shadow-size: 6px;
	}

	button {
		border: 2px solid var(--color-text-dark);
		background-color: white;
		color: var(--color-text-dark);
		box-shadow: var(--shadow-size) var(--shadow-size) 0 0;

		font-family: Inter;
		font-weight: 600;
		font-size: 20px;
		line-height: 1.2;
		text-transform: uppercase;

		padding: 1rem;
		width: 100%;
		transition: 0.3s;
	}

	button:active {
		transform: translateX(var(--shadow-size)) translateY(var(--shadow-size));
		box-shadow: 0 0 0 0;
	}
</style>
