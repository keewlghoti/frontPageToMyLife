
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
    import { move_square } from "./movement";
    import {background} from "../../shared_classes/backgroud"
    import { element } from "svelte/internal";
    import { Draw_Square } from "../../shared_classes/shape_gen";
    let canvas: HTMLCanvasElement;
    var frame_placement = 1;

    var square_list = [];

    onMount(() =>{
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

        // starting the loop
        let frame = requestAnimationFrame(loop);

        // setting constants
        const square_placement_movement_line_y = canvas.height *.66 + 6;

        //loop for frame
        function loop(){
            frame = requestAnimationFrame(loop);
            // STEP: drawing static elements
            background(canvas, ctx);
            horizon(canvas, ctx, square_placement_movement_line_y);
            // STEP: fill square_list
            if(square_list.length <= 4){
                var size = Math.floor(Math.random()*200)
                let square = new Draw_Square(
                                        canvas,
                                        canvas.width,
                                        square_placement_movement_line_y - size,
                                        size
                                        );
                square.randomize_movement()
                square_list.push(square);
            }
            // STEP: Move all squares
            for (let index = 0; index < square_list.length; index++) {
                let square = square_list[index];
                move_square(ctx, square);
            }
            
            // STEP: Clean square_list of any squares
            for (let index = 0; index < square_list.length; index++) {
                let square = square_list[index];
                if((square.tl_x + square.size_x) <= 0){
                    square_list.splice(index, 1);
                };
            };
            
        //}
           // square_list = square_list.filter(square => (square.tl_x + square.size_x) >> 0)

    } return () => {
        cancelAnimationFrame(frame)
    }
        
})

</script>