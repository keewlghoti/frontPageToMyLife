
class Meta_Rectangle {
    canvas: HTMLCanvasElement;
    tl_x: number;
    tl_y: number;
    size_x: number = 1;
    size_y: number = 1;
    movement: number = 0;
    frame_placement: number = 1;
    color: string;

    constructor(canvas: HTMLCanvasElement, tl_x: number, tl_y:number){
      this.canvas = canvas;
      this.tl_x = tl_x;
      this.tl_y = tl_y;
      this.frame_placement = 1;  // frame_placement tracks frames alive
      this.movement = 0;  // movement tracks movement velocity -> currently directionless

      this.color = getRandomColor();
    };
    
    random_placement() {
      this.tl_x = Math.floor(Math.random() * this.canvas.width);
      this.tl_y = Math.floor(Math.random() * this.canvas.height);
    };

    randomize_movement(){
      do {
        this.movement = Math.floor(Math.random()*7);
      } while (this.movement == 0);
      
    }

    update_movement_x(){
        // this.tl_x = this.tl_x - (this.movement * this.frame_placement)      
        this.tl_x = this.tl_x - this.movement  
    }

    update_movement_y(){
        // this.tl_y = this.tl_y - (this.movement * this.frame_placement)    
        this.tl_y = this.tl_y - this.movement   
    }

    update_movement(){
      this.update_movement_x()
      this.update_movement_y()
    }

    update_frame_placement() {
      this.frame_placement += 1;
    };
}


class Draw_Square extends Meta_Rectangle {
  /**
   * 
   * Draw Square class returns a square object ready to be print
   * @param canvas 
   * @param tl_x 
   * @param tl_y 
   * @param size 
   */
    constructor(canvas: HTMLCanvasElement, tl_x:number, tl_y: number, size:number){
      super(canvas,tl_x,tl_y);
      this.size_x = size;
      this.size_y = size;
    }
}

class Draw_Rectangle extends Meta_Rectangle {
    constructor(canvas: HTMLCanvasElement, tl_x:number, tl_y: number, size_x:number, size_y:number){
      super(canvas,tl_x,tl_y);
      this.size_x = size_x;
      this.size_y = size_y;
    }
}



function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export { Draw_Square }; 