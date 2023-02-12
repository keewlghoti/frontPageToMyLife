
let horizon = function(canvas:HTMLCanvasElement, ctx: CanvasRenderingContext2D | null){
    /**
     * Horizon draws a line accross the screen
     */
    ctx.strokeStyle = "green"
    
    ctx.beginPath();
    const y: number = canvas.height * (2/3)
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
}
export {horizon}