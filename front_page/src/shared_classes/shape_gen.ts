
class Draw_Square {
    tl_x: number;
    constructor(canvas: HTMLCanvasElement, size: number){
      this.canvas = canvas;
      this.size = size;
      this.tl_x = 1;
      this.tl_y = 1;
      this.br_x = this.tl_x + size;
      this.br_y = this.tl_y - size;
      this.color = getRandomColor()
    };
    
    random_placement() {
      this.tl_x = Math.floor(Math.random() * this.canvas.width);
      this.tl_y = Math.floor(Math.random() * this.canvas.height);
      
    };
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