var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
console.log(colors[Math.floor(Math.PI * colors.length)]);
var Ball = function () {
    this.x = 100;
    this.y = 100;
    this.xSpeed = Math.random() * 10 - 5;
    this.ySpeed = Math.random() * 10 - 5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
};

var circle = function (x, y, radius, fillCircle, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, 6, true, this.color);
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function () {
    if (this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed;
    }
    if(this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};

var balls = [];

for (var i = 0; i < 10; i++) {
    balls[i] = new Ball();
}

setInterval(function () {
    ctx.clearRect(0, 0, width, height);

    for (var i = 0; i < 10; i++) {
        balls[i].draw();
        balls[i].move();
        balls[i].checkCollision();
    }

    ctx.strokeRect(0, 0, width, height);
}, 30);