var keyNames = {
    32: "space",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    13: "enter",
    16: "shift",
    18: "alt",
    17: "ctrl"
};

var speeds = {
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5,
    54: 6,
    55: 7,
    56: 8,
    57: 9
};

var controlKeys = {
    90: "slower", // z
    88: "faster", // x
    67: "smallerBall", // c
    86: "bigerBall" //v
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

var Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.speed = 5;
    this.size = 10;
    this.xSpeed = 5;
    this.ySpeed = 0;
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    // if (this.x < 0) {
    //     this.x = width;
    // } else if (this.x > width) {
    //     this.x = 0;
    // }
    // if (this.y < 0) {
    //     this.y = height; 
    // } else if (this.y > height) {
    //     this.y = 0;
    // }
    if(this.x < 0 || this.x > width) {
        this.xSpeed = -this.xSpeed;
    } else if (this.y < 0 || this.y > height) {
        this.ySpeed = -this.ySpeed;
    }
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, this.size, true);
};

Ball.prototype.setDirection = function (direction) {
    if (direction === "up") {
        this.xSpeed = 0;
        this.ySpeed = -this.speed;
    } else if (direction === "right") {
        this.xSpeed = this.speed;
        this.ySpeed = 0;
    } else if (direction === "down") {
        this.xSpeed = 0;
        this.ySpeed = this.speed;
    } else if (direction === "left") {
        this.xSpeed = -this.speed;
        this.ySpeed = 0;
    } else if (direction === "space") {
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
};

var ball = new Ball();

$("body").keydown(function (event) {
    if(event.keyCode >= 49 && event.keyCode <= 57) {
        ball.speed = speeds[event.keyCode];
    } else if (event.keyCode === 90) {
        ball.speed--;
        if (ball.speed < 0) ball.speed = 0;
    }else if (event.keyCode === 88) {
        ball.speed++;
        if (ball.speed > 9) ball.speed = 9;
    } else if (event.keyCode === 67) {
        ball.size--;
        if (ball.size < 3) ball.size = 3;
    }else if (event.keyCode === 86) {
        ball.size++;
        if (ball.size > 30) ball.size = 30;
    } else {
        var direction = keyNames[event.keyCode];
    }
    ball.setDirection(direction);
    $("#ballSize").text("Ball size = " + ball.size);
    $("#ballSpeed").text("Ball speed = " + ball.speed);
    console.log(event.keyCode, ball.size);
});

setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    ball.draw();
    ball.move();
    ctx.strokeRect(0, 0, width, height);
}, 30);