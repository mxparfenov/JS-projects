var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

var width = 400;
var height = 400;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHit = function (distance) {
    if (distance < 14) {
        return "You are on fire!" + clicksToLoss;
    } else if (distance < 20) {
        return "Very hot!" + clicksToLoss;
    } else if (distance < 40) {
        return "Hot!" + clicksToLoss;
    } else if (distance < 80) {
        return "Warm!" + clicksToLoss;
    } else if (distance < 160) {
        return "Cold!" + clicksToLoss;
    } else if (distance < 320) {
        return "Very cold!" + clicksToLoss;
    } else {
        return "F*cking freeze!" + clicksToLoss;
    }
};


var clicks = 0;
var clicksToLoss;


$("#map").click(function (event) {
    clicks++;
    var distance = getDistance(event, target);
    var distanceHit = getDistanceHit(distance);
    $("#distance").text(distanceHit);
    if (clicks > 40) {
        alert("GAME IS OVER! YOU LOSE! Treasure was on X: " + target.x + " , Y: " + target.y);
        clicks = 0;
        return;
    }
    if (distance < 8) {
        alert("Treasure found. Clicks: " + clicks);
    }
    clicksToLoss = " Clicks left: " + (40 - clicks);
});
