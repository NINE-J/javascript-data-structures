/*
reverse
문자열을 받아들이고 그 문자열의 역순인 문자열을 반환하는 reverse 함수를 작성합니다.
*/
function reverse(str, bucket = "", st = 0){
  if(st === str.length) return bucket

  bucket += str.slice(str.length-(st+1), str.length-(st))

  return reverse(str, bucket, st+1)
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

// 솔루션 확인 후
// 이건 그냥 반복문에 가깝고 재귀는 결과를 함수한테 맡기는 너낌이 더 강하다.