
let horizon = function(canvas:HTMLCanvasElement, ctx: CanvasRenderingContext2D | null, horizon_line: number){
    /**
     * Horizon draws a line accross the screen
     */
    ctx.strokeStyle = "green"
    
    ctx.beginPath();
    const y = horizon_line
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
}
export {horizon}