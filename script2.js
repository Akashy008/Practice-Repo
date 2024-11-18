let arr = [7, 6, 4, 8, 4, 9, 11, 4, 15];
let max = arr[0];  // Start with the first element

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Maximum number:", max);  // Output: 15
