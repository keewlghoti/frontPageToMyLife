


class Draw_Square {
    constructor(canvas_w: number, canvas_h: number, size: number){ 
        this.tl_x = Math.floor(Math.random() * canvas_w);
        this.tl_y = Math.floor(Math.random() * canvas_h);
        this.br_x = this.tl_x + size;
        this.br_y = this.tl_y - size;
        this.color = getRandomColor()
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