/*
isPalindrome
전달된 문자열이 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 true 를 반환하는 isPalindrome이라는 재귀(recursive) 함수를 작성하시오. 팔린드롬이 아닐 경우 false 를 반환합니다.
*/

function isPalindrome(str, st = 0){
  if(str.length % 2 === 0) return false
  if(str[st] !== str[str.length-(st+1)]) return false
  if(st > str.length/2) return true

  return isPalindrome(str, st+1)
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

// 솔루션 확인 후
// 반례랑 테스트 케이스가 적으니까 그냥 돼뿟네..
// +condition: str이 한 글자인 경우 true
// +condition: str이 두 글자인데 같은 글자면 true
// 이것도 역시 구림. 재귀는 재귀답게 사용하는 게 더 좋은 듯