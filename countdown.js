

var countdownGenerator = function (x) {
  var count = x;

  return function() {
    if (count > 0) {
      console.log("T-minus " + count);
    } else if (count === 0) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
    count--;
  }
}

var countdown = countdownGenerator(5);


countdown();
countdown();
countdown();
countdown();
countdown();
countdown();
