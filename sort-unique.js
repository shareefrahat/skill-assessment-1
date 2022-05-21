const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];

function sortAndUnique(array) {
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  let uniqueArr = [];
  for (let i of array) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  return uniqueArr;
}

console.log("Output:", sortAndUnique(arr));
