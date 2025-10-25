function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr, depth = 0) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  console.log(" ".repeat(depth * 2) + `Bölünen dizi: [${left}] ve [${right}]`);

  let sortedLeft = mergeSort(left, depth + 1);
  let sortedRight = mergeSort(right, depth + 1);

  let merged = merge(sortedLeft, sortedRight);
  console.log(" ".repeat(depth * 2) + `Birleştirilen dizi: [${merged}]`);

  return merged;
}

let arr = [16, 21, 11, 8, 12, 22];
console.log("Başlangıç dizisi:", arr);
let sorted = mergeSort(arr);
console.log("Sıralı dizi:", sorted);
console.log("Merge Sort işlemi tamamlandı.");
