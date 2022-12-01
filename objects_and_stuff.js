class Object {
  constructor(x,y,height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.rotation = 0;
    this.texture = null;
    draw(ctx,canvas) {
       ctx.drawImage(this.texture, this.x, this.y, this.width, this.height);
    }
  }
}
