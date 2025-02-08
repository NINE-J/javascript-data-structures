/*
capitalizeFirst
capitalizeFirst라는 재귀 함수를 작성하시오.

문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.
*/
function capitalizeFirst (arr) {
  arr[0] = arr[0][0].toUpperCase() + arr[0].substring(1)
  if(arr.length <= 1) return arr
  return [arr[0], ...capitalizeFirst(arr.splice(1))]
}

console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']
console.log(capitalizeFirst(['car'])) // ['Car']
