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
		min-height: 100vh;
		padding: 1rem;
		justify-content: center;
		align-items: center;
	}
</style>
