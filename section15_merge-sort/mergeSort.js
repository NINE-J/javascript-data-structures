/**
 * merge sort - 병합합 정렬
 *
 * 시간 복잡도: O(n log n)
 * 분할 정복(Divide and Conquer) 방식을 사용하여 배열을 반씩 나누고 병합하며 정렬하는 알고리즘이다.
 */

// 두 개의 배열을 받아 병합하는 함수
function merge_test(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  // 각 배열을 모두 탐색한다.
  while (i < arr1.length && j < arr2.length) {
    // 오름차순 정렬을 위해 더 작은 값을 먼저 results에 담는다.
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      // 큰 경우만 비교했기 때문에 같은 경우는 자연스럽게 else로 처리된다.
      results.push(arr2[j]);
      j++;
    }
  }
  // 병합 정렬은 이미 정렬된 배열들을 가지고 병합하는 조건으로 동작하기 때문에 분할된 배열 중 한 쪽의 탐색이 끝나면 나머지는 자연스럽게 병합된다.
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

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

  // 남은 요소들 추가
  return result.concat(left.slice(i), right.slice(j));
}

function mergeSort(arr) {
  // arr을 작은 단위로 분할하기 위해 길이가 1보다 작거나 같을 때까지 mergeSort를 재귀 호출한다.
  if (arr.length <= 1) return arr;
  // arr의 중간 지점을 구해 반씩 분할한다.
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // 분할했던 배열을 다시 병합한다.
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
