
import { sequence } from "@sveltejs/kit/hooks";
import {Draw_Square} from "../../shared_classes/shape_gen"



let moving_square = function(canvas:HTMLCanvasElement, ctx: CanvasRenderingContext2D, movement: number, frame_placement: number){
    
    const line_x = canvas.height * (2/3);
    const size_x = 6;
    const size_y = 6;
    var placement_x = canvas.width - size_x - movement

    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 5;
    // ctx.strokeRect(placement_x, line_x - 5 - size_y, size_x, size_y)
    square = new Draw_Square(canvas, 7)
    ctx.fillStyle = square.color;
    ctx.fillRect(square.tl_x - (movement * frame_placement), square.tl_y, square.size, square.size)


}
export {moving_square}