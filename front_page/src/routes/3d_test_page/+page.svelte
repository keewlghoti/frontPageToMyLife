<main>
    <h1>3d_test_page</h1>

    <canvas id = "3d_test" width="800" height="800"></canvas>
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
    import { onMount } from "svelte";

    onMount(() =>{
        // Get the canvas element
        var canvas = document.getElementById("cube");

        // Create a WebGL2 context
        // @ts-ignore
        var gl = canvas.getContext("webgl2");

        // Define the vertex data for the circle
        var vertexData = [
            0, 0, // center of the circle
            1, 0, // first point on the circle
        ];

        // Create a buffer to store the vertex data
        var vertexBuffer = gl.createBuffer();

        // Bind the buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        // Upload the vertex data to the buffer
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

        // Define the vertex shader
        var vertexShaderSource = `#version 300 es
            in vec2 a_position;

            void main() {
                gl_Position = vec4(a_position, 0, 1);
            }
        `;

        // Compile the vertex shader
        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);

        // Define the fragment shader
        var fragmentShaderSource = `#version 300 es
            precision mediump float;

            out vec4 outColor;

            void main() {
                outColor = vec4(1, 0, 0, 1);
            }
        `;

        // Compile the fragment shader
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);

        // Create a program and attach the shaders
        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        // Bind the program
        gl.useProgram(program);

        // Get the position attribute location
        var positionLocation = gl.getAttribLocation(program, "a_position");

        // Bind the buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        // Enable the attribute
        gl.enableVertexAttribArray(positionLocation);

        // Tell the attribute how to get data out of the buffer
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        // Draw the circle
        gl.drawArrays(gl.TRIANGLE_FAN, 0, vertexData.length / 2);
    })
</script>

