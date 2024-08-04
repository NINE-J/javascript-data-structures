/*
fib
숫자를 받아 피보나치 수열의 n번째 숫자를 반환하는 fib라는 재귀 함수를 작성하시오. 피보나치 수열은 1, 1로 시작하는 1, 1, 2, 3, 5, 8, ...의 정수의 수열이며, 모든 수는 이전 두 수의 합과 같다는 것을 명심하세요.
*/
function fib(n, arr = [1,1]){
  if(arr.length === n) return arr[n-1]

  arr.push(arr[arr.length-1]+arr[arr.length-2])

  return fib(n, arr)
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465

// Solution
// 이느무 공식은 맨날 까먹어~
function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}