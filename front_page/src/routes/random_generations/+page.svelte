<main>
    <h1>
        random_generations
    </h1>
    <canvas id="generations" width="800" height="800" bind:this={canvas}></canvas>
    <label>
        <h3>Size</h3>
        <input type=number bind:value = {size} min=1 max=799>
        <input type=range bind:value = {size} min=1 max=799>
    </label>
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
    label {
        align-content: center;
    }
</style>

<script lang="ts">
    import {onMount} from "svelte";
    import {Draw_Square} from "../../shared_classes/shape_gen"
    let canvas: HTMLCanvasElement;
    let size = 6;
    onMount(() => {
        const ctx = canvas.getContext('2d');
        let frame = requestAnimationFrame(loop);
        
        function loop(){
            frame = requestAnimationFrame(loop);
            var square = new Draw_Square(canvas, 1, 1, size);
            // var cirle = new Draw_Circle(canvas.width, canvas.height, size, ctx);
            square.random_placement()
            ctx.fillStyle = square.color;
            ctx.fillRect(square.tl_x, square.tl_y, size, size);
        }
        return () => {
            cancelAnimationFrame(frame);
        };
    })
    
</script>
