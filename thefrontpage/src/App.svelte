<script>
	//export let name;
	import openStare from './assets/stare_websiteOpener.png'
	//import openStare from './src/assets/stare_websiteOpener.png'
</script>

<main>
	<div>
		<img src={openStare} class="stare" alt = "Stare do png">
	</div>
	<div>
		<h1>Keewlghoti's Front Page</h1>
		<p>This is a webpage and a work in progress</p>
	</div>
	<div>
		<h3>
			Check out the Github at:
		</h3>
		<p>
			The <a href="https://github.com/keewlghoti/frontPageToMyLife" target="_blank">Github</a> 

		</p>
	</div>
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
		font-weight: 130;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>