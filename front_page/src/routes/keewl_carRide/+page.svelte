
<main>
    <h1>
        keewl_carRide
    </h1>

    <canvas id = "carRide" width="960" height="480" bind:this={canvas}></canvas>
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

<script lang="ts">
    import { onMount } from "svelte";
    import { horizon } from "./horizon"
    import { moving_square } from "./movement";
    import {background} from "../../shared_classes/backgroud"
    let canvas: HTMLCanvasElement;
    var frame_placement = 1;

    onMount(() =>{
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

        // starting the loop
        let frame = requestAnimationFrame(loop);

        //drawing static elements
        background(canvas, ctx);
        horizon(canvas, ctx);

        //loop for frame
        function loop(){
            const movement = 1
            moving_square(canvas,ctx,movement,frame_placement)
            frame = requestAnimationFrame(loop);
            frame_placement += 1;


        } return () => {
            cancelAnimationFrame(frame)
        }
        
    })

</script>