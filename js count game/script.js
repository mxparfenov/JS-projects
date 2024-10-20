var leftOffset = 0;
var topOffset = 0;
var squereAnimation = function () {
    var title = $("h1");
   if (leftOffset <= 100 && topOffset <= 0) {
    leftOffset++;
    title.offset({left: leftOffset});
   } else if (topOffset <= 100 && leftOffset >= 100) {
    topOffset++;
    title.offset({top: topOffset});
   } else if (topOffset >= 100 && leftOffset != 0) {
    leftOffset--;
    title.offset({left: leftOffset});
   } else {
    topOffset--;
    title.offset({top: topOffset});
   }
};

var fast = 100;
var numClick = 0;
var intervalId = setInterval(squereAnimation, fast);
$("h1").click(function () {
    clearInterval(intervalId);
    if(numClick >= 10) {
        $("h1").text("You win!");
    } else {
        numClick++;
        $("h1").text("Count click: " + numClick);
        fast -= 10;
        intervalId = setInterval(squereAnimation, fast);
    }
});


