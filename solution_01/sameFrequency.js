/*
빈도수 세기 - sameFrequency
sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.

여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:

Time: O(N)

예시 인풋:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/
function sameFrequency(num1, num2){
  let num1str = [...(''+num1)]
  let num2str = [...(''+num2)]
  if(num1str.length !== num2str.length) return false
  
  for(let i = 0; i < num1str.length; i++) {
      let cur = num2str.indexOf(num1str[i])
      if(cur > -1) num2str.splice(cur, 1)
  }
  
  return num2str.length === 0
}