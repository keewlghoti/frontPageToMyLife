<main>
    <h1>2d_test_page</h1>

    <canvas id="2d_test" width="800" height="800" bind:this={canvas}></canvas>
	<canvas id="cube"  width="800" height="800"></canvas>
</main>

<style>
    main{
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

    
    onMount(() => {
        var cube_canvas = document.getElementById('cube')
        var cube_ctx = cube_canvas.getContext("2d");
        const x = cube_canvas.width / 2;
        const y = cube_canvas.height / 2;
        const radius = 70;
        const startAngle = 0;
        const endAngle = Math.PI * 2;
        cube_ctx.fillStyle = "black";
        cube_ctx.fillRect(0,0,x,y);
        
        //circle
        cube_ctx.beginPath();
        cube_ctx.arc(x, y, radius, startAngle, endAngle);
        cube_ctx.fillStyle = "yellow";
        cube_ctx.fill();
        cube_ctx.stroke();
        
        //line
        cube_ctx.beginPath();
        cube_ctx.lineWidth = 10
        cube_ctx.strokeStyle = "blue"
        cube_ctx.moveTo(600, 600);
        cube_ctx.lineTo(800, 800);
        cube_ctx.stroke();
		const ctx = canvas.getContext('2d');
        let frame = requestAnimationFrame(loop);
        function loop(t){
            frame = requestAnimationFrame(loop);

			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

			for (let p = 0; p < imageData.data.length; p += 4) {
				const i = p / 4;
				const x = i % canvas.width;
				const y = i / canvas.width >>> 0;
				const r = 64 + (128 * x / canvas.width) + (64 * Math.sin(t / 1000));
				const g = 64 + (128 * y / canvas.height) + (64 * Math.cos(t / 1000));
				const b = 128;
				imageData.data[p + 0] = r;
				imageData.data[p + 1] = g;
				imageData.data[p + 2] = b;
				imageData.data[p + 3] = 255;
			    }

			ctx.putImageData(imageData, 0, 0);
		    }
		return () => {
			cancelAnimationFrame(frame);
		    };
        })


    onMount
</script>