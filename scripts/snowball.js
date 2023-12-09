export class Snowball {
    constructor(x, canvas) {
        this.canvas = canvas;
        this.radius = 10;
        this.x = x;
        this.y = -this.radius - 10;
        this.fallingSpeed = 0.5;
    }

    update(time) {
        this.y = this.y + this.fallingSpeed;

        this.x = this.x + Math.sin(time) * 0.3
    }

    draw(context) {
        this.y + 1;
        context.fillStyle = "#ffffff";
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();
    }
}