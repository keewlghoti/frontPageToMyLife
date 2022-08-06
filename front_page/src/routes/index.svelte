<script>
	//export let name;
    import About from "./about.svelte";
    import Resume from "./resume.svelte";
</script>

<main>
	<h1>Keewlghoti's Front Page</h1>
	<p>This is a webpage and a work in progress</p>
    <a href="/about">About Keewlghoti<br></a>
    <a href="/resume"> Keewlghoti's resume</a>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		background-color: #a89b9b;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 112;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>