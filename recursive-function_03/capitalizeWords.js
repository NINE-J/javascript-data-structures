/*
capitalizeWords
capitalizeWords라는 재귀 함수를 작성하시오. 단어 배열이 주어지면 각 단어가 대문자로 표시된 새 배열을 반환합니다.
*/
function capitalizeWords(arr) {
  arr[0] = arr[0].toUpperCase()
  if(arr.length <= 1) return arr
  return [arr[0], ...capitalizeWords(arr.splice(1))]
}

console.log(capitalizeWords(['i','am','learning','recursion']))