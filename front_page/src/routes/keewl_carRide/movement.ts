
import { sequence } from "@sveltejs/kit/hooks";
import {Draw_Square} from "../../shared_classes/shape_gen"



let move_square = function(
        ctx: CanvasRenderingContext2D | null,
        square: Draw_Square,
    ){
    ctx.fillStyle = square.color;
    square.update_movement_x()
    ctx.fillRect(
        square.tl_x,
        square.tl_y,
        square.size_x,
        square.size_y)
    square.update_frame_placement()
}

export {move_square}