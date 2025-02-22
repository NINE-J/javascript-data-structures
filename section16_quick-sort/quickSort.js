/**
 * Quick sort - 퀵 정렬
 *
 * 시간 복잡도: 평균 O(n log n), 최악 O(n^2)
 * 피벗(Pivot)을 기준으로 작은 값과 큰 값으로 나누어 정렬하는 알고리즘이다.
 */
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  let pivot = arr[start]; // 피벗을 적절히 정의한다.
  let swapIdx = start;

  // arr을 순회하며 pivot 보다 작은 값들을 왼쪽으로 배치한다.
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  // pivot 보다 작은 값들을 왼쪽에 배치했으므로, pivot을 왼쪽 값들 바로 다음에 배치한다.
  // 왼쪽의 값들은 pivot보다 작다. 단, 왼쪽의 값들은 정렬을 보장할 수 없으므로 별도 정렬이 필요하다.
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // 왼쪽 값들에 대해 quickSort. pivot을 제외한다.
    quickSort(arr, left, pivotIndex - 1);
    // 오른쪽 값들에 대해 quickSort. pivot을 제외한다.
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
