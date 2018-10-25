var words = ["ground", "control", "to", "major", "tom"];


function map(array, cb) {
  var mappedArray = [];
    var word = [];
  for (i in words) {
    var word = words[i];
    cb(word);
  }
}

map(words, function(word) {
  console.log(word.length);
  return word.length;
});

map(words, function(word) {
  console.log(word.toUpperCase());
  return word.toUpperCase();
});

map(words, function(word) {
  console.log(word.split('').reverse().join(''));
  return word.split('').reverse().join('');
});


