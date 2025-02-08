/*
Binary Search 연습
정렬된 배열과 값을 받아들이고 값이 존재하는 경우 그 인덱스를 반환하는 binarySearch라는 함수를 작성합니다. 값이 존재하지 않으면 -1을 반환합니다.

이 알고리즘은 linearSearch 보다 더 효율적일 것입니다.
*/
function binarySearch(arr, val) {
  let st = 0;
  let ed = arr.length - 1;
  let point = Math.floor((st + ed) / 2);

  while (arr[point] !== val && st <= ed) {
    if (val < arr[point]) {
      ed = point - 1;
    } else {
      st = point + 1;
    }
    point = Math.floor((st + ed) / 2);
  }

  if (arr[point] === val) return point;
  else return -1;
}

function test(func, array, target, expected) {
  func(array, target) === expected ? console.log("success") : console.log("failed");
}

test(binarySearch, [1, 2, 3, 4, 5], 2, 1); // 1
test(binarySearch, [1, 2, 3, 4, 5], 3, 2); // 2
test(binarySearch, [1, 2, 3, 4, 5], 5, 4); // 4
test(binarySearch, [1, 2, 3, 4, 5], 6, -1); // -1
test(binarySearch, [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10, 2); // 2
test(binarySearch, [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95, 16); // 16
test(binarySearch, [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100, -1); // -1
