
let background = function(canvas:HTMLCanvasElement, ctx: CanvasRenderingContext2D){

    // set background to black
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
export {background}