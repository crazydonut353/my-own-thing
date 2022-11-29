class Object {
  constructor(x,y,height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.rotation = 0;
    this.texture = '';
    draw(ctx,canvas) {
       ctx.drawImage(new Image(this.texture), this.x, this.y, this.width, this.height);
    }
  }
}
