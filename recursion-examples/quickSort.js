const array = [34,67,232,34,57,72,];

function quicksort(array) {
  if (array.length == 0) return [];

  const left = [],
    right = [],
    pivot = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort(array))