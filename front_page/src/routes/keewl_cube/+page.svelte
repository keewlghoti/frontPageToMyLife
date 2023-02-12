
<main>
    <h1>
        keewl_cube
    </h1>
    <canvas id="cube" width="800" height="800" bind:this={canvas}></canvas>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 100%;
        margin: 0 auto;
        background-color: #9e9999;
    }
    h1 {
		background-color: #a89b9b;
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 130;
	}
</style>

<script>
    import {onMount} from "svelte";
    let canvas;
    let size = 1;

    onMount(() => {
        //var canvas = document.getElementById('cube');
        var ctx = canvas.getContext("2d");
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        setInterval(update, 1000)
        // const radius = 70;
        // const startAngle = 0;
        // const endAngle = Math.PI * 2;
        //setInterval(update, 1000/30)
        function update(){
            ctx.fillStyle = "black";
            ctx.fillRect(0,0,canvas.width, canvas.height);
            //ctx.fillRect()
        }
    })
</script>
