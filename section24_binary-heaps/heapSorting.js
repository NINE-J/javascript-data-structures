/**
 * Heap Sort - 힙 정렬 (최대 힙 / 최소 힙)
 *
 * 시간 복잡도: O(n log n)
 * 힙(Heap) 자료구조를 활용하여 최댓값 또는 최솟값을 빠르게 찾고 정렬하는 알고리즘이다.
 * 최대 힙을 구축한 후, 루트 노드를 제거하면서 오름차순 정렬을 수행한다.
 * 최소 힙을 구축하면 내림차순 정렬이 된다.
 */

function heapSortAscending(A) {
  let n = A.length;

  // 최대 힙을 구성한다.
  buildMaxHeap(A);

  // 힙에서 루트(최대값)를 하나씩 제거하면서 정렬 수행
  for (let i = n - 1; i > 0; i--) {
    [A[0], A[i]] = [A[i], A[0]]; // 루트(최대값)와 마지막 원소 교환
    maxHeapify(A, 0, i); // 힙 크기를 줄이고 다시 힙 성질 유지
  }
  return A; // 오름차순 정렬된 배열 반환
}

function heapSortDescending(A) {
  let n = A.length;

  // 최소 힙을 구성한다.
  buildMinHeap(A);

  // 힙에서 루트(최솟값)를 하나씩 제거하면서 정렬 수행
  for (let i = n - 1; i > 0; i--) {
    [A[0], A[i]] = [A[i], A[0]]; // 루트(최솟값)와 마지막 원소 교환
    minHeapify(A, 0, i); // 힙 크기를 줄이고 다시 힙 성질 유지
  }
  return A; // 내림차순 정렬된 배열 반환
}

/**
 * 최대 힙(Max Heap) 생성
 * 배열을 최대 힙으로 변환하는 과정
 */
function buildMaxHeap(A) {
  let heapSize = A.length;
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(A, i, heapSize);
  }
}

/**
 * 최소 힙(Min Heap) 생성
 * 배열을 최소 힙으로 변환하는 과정
 */
function buildMinHeap(A) {
  let heapSize = A.length;
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    minHeapify(A, i, heapSize);
  }
}

/**
 * 최대 힙 속성을 유지하는 함수
 */
function maxHeapify(A, i, heapSize) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < heapSize && A[left] > A[largest]) {
    largest = left;
  }
  if (right < heapSize && A[right] > A[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [A[i], A[largest]] = [A[largest], A[i]];
    maxHeapify(A, largest, heapSize);
  }
}

/**
 * 최소 힙 속성을 유지하는 함수
 */
function minHeapify(A, i, heapSize) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < heapSize && A[left] < A[smallest]) {
    smallest = left;
  }
  if (right < heapSize && A[right] < A[smallest]) {
    smallest = right;
  }
  if (smallest !== i) {
    [A[i], A[smallest]] = [A[smallest], A[i]];
    minHeapify(A, smallest, heapSize);
  }
}

console.log(heapSortAscending([1, 6, 5, 3, 2, 9, 7, 4, 8]));
console.log(heapSortDescending([1, 6, 5, 3, 2, 9, 7, 4, 8]));
