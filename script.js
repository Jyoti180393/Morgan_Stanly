let arr = [5, 7, 10, 8, 9];
let arr1 = [2, 10, 5, 6, 9];

// Array.prototype.forEach = function () {
//   console.log('for each');
// };
// console.log(arr.forEach);

function unique(a, b) {
  let res = [];
  a.map((val) => {
    if (b.indexOf(val) === -1) {
      res.push(val);
    }
  });
  b.map((val) => {
    if (a.indexOf(val) === -1) {
      res.push(val);
    }
  });
  // let arr2 = a.concat(b);
  // let res = new [...Set(arr2)];
  console.log(res);
}

// unique(arr, arr1);

var a = 10,
  b = 20,
  c = 30;

function print() {
  b = 25;
  c = 35;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  var a = 30;
  d = 50;
}

print();
console.log(a);
console.log(b);
console.log(c);
console.log(d);
