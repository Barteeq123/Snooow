import {Snowball} from "./snowball.js";
import {Snow} from "./snow.js";

let time = 0;
let snowballs = [];
let snow;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function main() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    snow = new Snow(canvas);

    setInterval(() => {
        snowballs.push(new Snowball(Math.min(Math.random() * canvas.width)));
    }, 150)
};

function animate() {
    time += 0.01;

    for (let snowball of snowballs) {
        snowball.update(time);

        if (snowball.y > (canvas.height + 20)) {
            snowballs = snowballs.filter(function(element) {
                return element !== snowball;
            });

            snow.y -= 0.1;
            snow.height += 0.1;
        }
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let snowball of snowballs) {
        snowball.draw(context);
    }
    snow.draw(context);

    requestAnimationFrame(animate)
}

main();
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}, false);