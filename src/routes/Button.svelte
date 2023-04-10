<script lang="ts">
	export let onClick: () => void;
</script>

<div class="main">
	<button on:click={onClick}><slot /></button>
</div>

<style>
	:root {
		--shadow-size: 6px;
	}

	.main {
		box-shadow: var(--shadow-size) var(--shadow-size) 0 0;
		transition: 0.3s;
	}

	.main::after {
		content: '';
		top: 0;
		left: 0;
		transition: 0.3s;
	}

	button {
		border: 2px solid var(--color-text-dark);
		background-color: white;
		color: var(--color-text-dark);

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
	}
</style>
