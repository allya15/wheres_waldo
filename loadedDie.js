var rollLoadedDie = makeLoadedDie();

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var roll = 0;

  return function() {
    var x = list[roll]
    roll += 1;
    return x;

  }
}





console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
