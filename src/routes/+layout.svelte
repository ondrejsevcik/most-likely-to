<script>
	import './styles.css';
</script>

<main class="app">
	<slot />
</main>

<style>
	.app {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		justify-content: center;
		align-items: center;
	}
</style>
