export class Snow {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = 0;
        this.y = canvas.height;
        this.width = canvas.width;
        this.height = 0;
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.fill();
        context.closePath();
    }
}