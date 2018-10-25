var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "alex",     age: 19 }
];

var result = students.sort(function(a, b) {
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA = nameB) {
    var ageA = a.age;
    var ageB = b.age;
    if (ageA < ageB) {
      return -1;
    }
    if (ageA > ageB) {
      return 1
    }
    return 0
  }
  return 0
});

console.log(result);