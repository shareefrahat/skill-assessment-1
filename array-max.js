function getMax(ar) {
  return Math.max(...ar.map((e) => (Array.isArray(e) ? getMax(e) : e)));
}

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

console.log("Output:", getMax(ar));
