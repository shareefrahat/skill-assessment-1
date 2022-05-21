const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];

function countDuplicate(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else {
      counts[arr[i]] = 1;
    }
  }
  for (let element in counts) {
    if (counts[element] >= 2) {
      console.log(element + " counted: " + counts[element] + " times.");
    }
  }
  console.log(counts);
}

countDuplicate(arr);
